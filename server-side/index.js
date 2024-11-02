import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import userRoutes from './routes/user.js';
import connectDB from './config/db.js';
import signupRoute from '../server-side/routes/signup.js';
import bodyParser from 'body-parser';
import loginRoute from '../server-side/routes/login.js';
import founderFormPostRoute from './routes/founderFormPostRoutes.js';
import founderPostRoute from './routes//founderPostRoute.js'
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
const uploadPath = path.join(__dirname, '../server-side/upload');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf/;
    const mimetype = allowedTypes.test(file.mimetype);
    cb(null, mimetype ? true : new Error('Error: File type not allowed!'));
  },
});

// Define upload fields middleware
const cpUpload = upload.fields([
  { name: "businessPicture", maxCount: 5 },
  { name: "nidCopy", maxCount: 1 },
  { name: "tinCopy", maxCount: 1 },
  { name: "taxCopy", maxCount: 1 },
  { name: "tradeLicense", maxCount: 1 },
  { name: "bankStatement", maxCount: 1 },
  { name: "securityFile", maxCount: 1 },
  { name: "financialFile", maxCount: 1 },
]);

// Define upload route
app.post('/upload', cpUpload, (req, res) => {
  res.status(200).json({ message: 'Files uploaded successfully!', files: req.files });
});


// Serve static files from the upload directory
// app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Route definitions
app.use("/users", signupRoute);
app.use("/founderpost", founderPostRoute);
app.use("/users/auth", loginRoute);
app.use("/founderpost", founderFormPostRoute);
app.use('/users', userRoutes);

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