
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
if (process.env.NODE_ENV ==='production'){
  const __dirname=path.resolve();
  app.use(express.static(path.join(__dirname,'../client-side/dist')));
  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client-side','dist','index.html')))
}
else{
  app.get('/', (req, res) => res.send('Server is ready'));
}

// Serve static files from the uploads directory
app.use("/uploads", express.static(uploadDir));

// Enable CORS with credentials
app.use(cors({
  origin: 'https://investkoree-client-side.vercel.app/',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use('/api/investments', investmentRoutes);
// Middleware for parsing JSON, URL-encoded data, and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// User routes
app.use('/api/users', userRoutes);

// Founder post routes
app.use("/api/founderposts", founderPostRoutes); // Changed to a more specific route

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Root route


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
