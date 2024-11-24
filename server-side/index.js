import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import multer from 'multer';
import connectDB from './config/db.js';
import signupRoute from '../server-side/routes/signup.js';
import loginRoute from '../server-side/routes/login.js';
// import founderFormPostRoute from './routes/founderFormPostRoutes.js';
import userSpecificRoute from './routes/userRoutes.js';
import userPostsRoute from './routes/userPostsRoute.js';
import founderPostRoute from './routes/founderPostRoute.js';
import investmentRoute from './routes/investmentRoutes.js';
import allPostsRoute from './routes/allPostRoute.js';
import { createFounderPost } from './controllers/founderFormController.js';
import { authToken } from './utils/authMiddleware.js';
import PendingPost from './models/pendingPost.js';
import FounderPost from './models/founderFormPostModels.js';
import Notification from './models/notification.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'https://investkoree.onrender.com','https://investkoree.vercel.app','http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Connect to the database
connectDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Multer setup for file uploads
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|pdf|doc|txt|ppt/;
    if (filetypes.test(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
});


// Route definitions
app.use("/users", signupRoute);
app.use("/founderpost", founderPostRoute);
app.use("/users/auth", loginRoute);
// app.use("/adminpost", founderFormPostRoute);
app.use('/api', userSpecificRoute);
app.use('/investments', investmentRoute);
app.use('/api', userPostsRoute);
app.use('/api', allPostsRoute);

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join', (userId) => {
    socket.join(userId);
    console.log(`User  ${userId} joined the room`);
  });

  socket.on('disconnect', () => {
    console.log('User  disconnected:', socket.id);
  });
});

// Define the route for creating a founder post
app.post("/adminpost/pendingpost", authToken, upload.fields([
  { name: "businessPicture", maxCount: 10 },
  { name: " nidCopy", maxCount: 1 },
  { name: "tinCopy", maxCount: 1 },
  { name: "taxCopy", maxCount: 1 },
  { name: "tradeLicense", maxCount: 1 },
  { name: "bankStatement", maxCount: 1 },
  { name: "securityFile", maxCount: 1 },
  { name: "financialFile", maxCount: 1 },
]), (req, res, next) => {
  console.log("Files in req.files:", req.files);
  next();
}, createFounderPost);


// Additional routes for pending posts
app.get('/adminpost/pending', async (req, res) => {
  try {
    const posts = await PendingPost.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts: ' + error.message });
  }
});
app.post('/adminpost/accept', async (req, res) => {
  const { postId, userId } = req.body; // Ensure userId is coming from the request body
  try {
    // Find the pending post by ID
    const pendingPost = await PendingPost.findById(postId);
    if (!pendingPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Prepare the data for the founder post
    const newFounderPost = new FounderPost({
      ...pendingPost.toObject(),
      userId: pendingPost.userId || userId, // Use pendingPost.userId or fallback to userId from request
    });

    // Save the new founder post
    await newFounderPost.save();

    // Remove the pending post after saving it to the founder posts
    await PendingPost.findByIdAndDelete(postId);

    // Create a notification for the user
    const notification = new Notification({
      userId,
      message: `Your post for "${pendingPost.businessName}" has been accepted.`,
    });
    await notification.save();

    // Emit a notification to the user
    io.to(userId).emit('notification', notification);

    // Send the accepted post data to the /founderpost/postdata route
    const postData = {
      ...newFounderPost.toObject(),
      businessPictures: newFounderPost.businessPictures, // Ensure all fields are passed correctly
    };

    // Use the existing route to handle the data
    req.body = postData;
    req.user = { _id: userId }; // Simulate authenticated user for the createFounderPost function

    // Call the /founderpost/postdata handler directly
    upload.fields([
      { name: "businessPicture", maxCount: 10 },
      { name: "nidCopy", maxCount: 1 },
      { name: "tinCopy", maxCount: 1 },
      { name: "taxCopy", maxCount: 1 },
      { name: "tradeLicense", maxCount: 1 },
      { name: "bankStatement", maxCount: 1 },
      { name: "securityFile", maxCount: 1 },
      { name: "financialFile", maxCount: 1 },
    ])(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error processing files: ' + err.message });
      }
      await createFounderPost(req, res); // Call the existing function to process the post
    });

  } catch (error) {
    res.status(500).json({ message: 'Error accepting post: ' + error.message });
  }
});

app.post('/adminpost/deny', async (req, res) => {
  const { postId, userId } = req.body;
  try {
    const pendingPost = await PendingPost.findById(postId);
    if (!pendingPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Get the business name from the pending post
    const businessName = pendingPost.businessName;

    const notification = new Notification({
      userId: userId,
      message: `Your post for "${businessName}" has been denied.`,
    });
    await notification.save();

    await PendingPost.findByIdAndDelete(postId);
    io.to(userId).emit('notification', notification);

    res.status(200).json({ message: 'Post denied and removed from pending posts' });
  } catch (error) {
    res.status(500).json({ message: 'Error denying post: ' + error.message });
  }
});
app.get('/adminpost/notifications/:userId', async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications: ' + error.message });
  }
});
app.put('/adminpost/notifications/read/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    // Update all notifications for the user as read
    await Notification.updateMany({ userId }, { $set: { read: true } });

    // Emit a real-time event to notify the client
    io.to(userId).emit('notifications-read', { userId });

    res.status(200).json({ message: 'All notifications marked as read.' });
  } catch (error) {
    res.status(500).json({ message: 'Error marking notifications as read: ' + error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});