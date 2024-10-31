
// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import userRoutes from './routes/user.js';
import connectDB from './config/db.js';
import signupRoute from '../server-side/routes/signup.js'
import bodyParser from 'body-parser';
import loginRoute from '../server-side/routes/login.js'
import founderPostRoute from '../server-side/routes/founderPostRoutes.js'
import { fileURLToPath } from 'url';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;





connectDB();

app.use(express.json());
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



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/users", signupRoute);  
app.use("/users/auth", loginRoute);
app.use("/founderpost", founderPostRoute);

// Routes
app.use('/users', userRoutes);
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
