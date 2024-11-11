import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import userRoutes from './routes/user.js';
import userSpecificRoute from './routes/userRoutes.js'
import connectDB from './config/db.js';
import signupRoute from '../server-side/routes/signup.js';
import bodyParser from 'body-parser';
import loginRoute from '../server-side/routes/login.js';
// import founderFormPostRoute from './routes/founderFormPostRoutes.js';
import founderPostRoute from './routes//founderPostRoute.js'
// import { fileURLToPath } from 'url';
import userPostsRoute from './routes/userPostsRoute.js'
import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/'); // Specify the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid name collisions
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });


dotenv.config();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;


connectDB();




// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const allowedOrigins = [
  'http://localhost:3000',
  'https://investkoree.onrender.com',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


// app.use('/upload', express.static(path.join(__dirname, '../../client-side/Public/upload')));

// Route definitions
app.use("/users", signupRoute);
app.use("/founderpost", founderPostRoute);
app.use("/users/auth", loginRoute);
// app.use("/founderpost", founderFormPostRoute);
// app.use('/users', userRoutes);
app.use('/api', userSpecificRoute);
app.use('/api', userPostsRoute);


// upload form 
app.post('/upload',upload.single("businessPicture"),(req, res) => {
 console.log (req.body);
 console.log(req.file);
 return res.redirect("/")
});


// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});