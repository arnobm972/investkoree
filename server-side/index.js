import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs'; // Import fs to check for directory existence
import userRoutes from './routes/user.js';
import connectDB from './config/db.js';
import signupRoute from '../server-side/routes/signup.js';
import bodyParser from 'body-parser';
import loginRoute from '../server-side/routes/login.js';
import founderFormPostRoute from './routes/founderFormPostRoutes.js';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;


connectDB();


const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

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

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route definitions
app.use("/users", signupRoute);
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