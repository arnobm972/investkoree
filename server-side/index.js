import express from 'express';
import helmet from "helmet";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Define allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://investkoree.onrender.com', // Replace with your actual Render frontend URL
];

// Set up CORS options
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
  credentials: true,
  optionsSuccessStatus: 200,
};

// Use CORS with the specified options
app.use(cors(corsOptions));

// Other middleware
connectDB();
app.use(express.json());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "https://investkoree-backend.onrender.com"],
      "style-src": null,
    },
  })
);

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});