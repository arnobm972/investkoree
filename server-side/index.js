import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import investmentRoutes from './routes/investmentRoutes.js'; 
import fs from 'fs';
import founderPostRoutes from './routes/founderPostRoutes.js'; // fixed path

dotenv.config();

// Load environment variables and connect to the database
connectDB();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve static files from the uploads directory
app.use("/uploads", express.static(uploadDir));

// Enable CORS with credentials, dynamically setting the origin based on environment
const allowedOrigins = [
  'http://localhost:5000',
  'https://investkoree-client-side.vercel.app/' // Add your frontend Vercel deployment URL here
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware for parsing JSON, URL-encoded data, and cookies
app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/investments', investmentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/founderposts', founderPostRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Serve frontend in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client-side/dist')));

  // Fallback for all non-API routes to serve the frontend
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client-side', 'dist', 'index.html'))
  );
} else {
  // Development mode root route
  app.get('/', (req, res) => res.send('API is running...'));
}

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
