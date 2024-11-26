import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import multer from 'multer';
import connectDB from './config/db.js';
import signupRoute from '../server-side/routes/signup.js';
import loginRoute from '../server-side/routes/login.js';
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

// Initialize App
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'https://investkoree.onrender.com','http://localhost:5173','https://investkoree-c8l8.onrender.com'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Connect to Database
connectDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Multer Setup
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|pdf|doc|txt|ppt/;
    cb(null, filetypes.test(file.mimetype));
  },
});

// Routes
app.use('/users', signupRoute);
app.use('/founderpost', founderPostRoute);
app.use('/users/auth', loginRoute);
app.use('/api', userSpecificRoute);
app.use('/investments', investmentRoute);
app.use('/api', userPostsRoute);
app.use('/api', allPostsRoute);

// Real-time Socket.IO Setup
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('join', (userId) => {
    socket.join(userId);
    console.log(`User ${userId} joined room`);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Create Founder Post with Pending Approval
app.post(
  '/adminpost/pendingpost',
  authToken,
  upload.fields([
    { name: 'businessPicture', maxCount: 10 },
    { name: 'nidCopy', maxCount: 1 },
    { name: 'tinCopy', maxCount: 1 },
    { name: 'taxCopy', maxCount: 1 },
    { name: 'tradeLicense', maxCount: 1 },
    { name: 'bankStatement', maxCount: 1 },
    { name: 'securityFile', maxCount: 1 },
    { name: 'financialFile', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      console.log('Files received:', req.files);
      await createFounderPost(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Error creating post: ' + error.message });
    }
  }
);

// Pending Posts Routes
app.get('/adminpost/pending', async (req, res) => {
  try {
    const posts = await PendingPost.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts: ' + error.message });
  }
});

app.post('/adminpost/accept', async (req, res) => {
  const { postId, userId } = req.body;
  try {
    const pendingPost = await PendingPost.findById(postId);
    if (!pendingPost) return res.status(404).json({ message: 'Post not found' });

   
    await PendingPost.findByIdAndDelete(postId);

    const notification = new Notification({
      userId,
      message: `Your post for "${pendingPost.businessName}" has been accepted.`,
    });
    await notification.save();

    io.to(userId).emit('notification', notification);
    res.status(200).json(FounderPost);
  } catch (error) {
    res.status(500).json({ message: 'Error accepting post: ' + error.message });
  }
});

app.post('/adminpost/deny', async (req, res) => {
  const { postId, userId,reason} = req.body;
  if (!reason) {
    return res.status(400).json({ message: 'Reason for denial is required' });
  }

  try {
    const pendingPost = await PendingPost.findById(postId);
    if (!pendingPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    pendingPost.status = 'denied';  // Set the status to 'denied' or use provided status
    pendingPost.reason = reason || 'No reason provided'; // Add the reason for denial
    await pendingPost.save();
    await PendingPost.findByIdAndDelete(postId);
    // Get the business name from the pending post
    const businessName = pendingPost.businessName;

    const notification = new Notification({
      userId: userId,
      message: `Your post for "${businessName}" has been denied.`,
    });
    await notification.save();

    
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
  try {
    await Notification.updateMany({ userId: req.params.userId }, { $set: { read: true } });
    io.to(req.params.userId).emit('notifications-read');
    res.status(200).json({ message: 'All notifications marked as read.' });
  } catch (error) {
    res.status(500).json({ message: 'Error marking notifications as read: ' + error.message });
  }
});

// Global Error H
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});