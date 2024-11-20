import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import signupRoute from '../server-side/routes/signup.js';
import loginRoute from '../server-side/routes/login.js';
import founderFormPostRoute from './routes/founderFormPostRoutes.js';
import userSpecificRoute from './routes/userRoutes.js';
import userPostsRoute from './routes/userPostsRoute.js';
import founderPostRoute from './routes//founderPostRoute.js'
import investmentRoute from './routes/investmentRoutes.js';
import allPostsRoute from './routes/allPostRoute.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


connectDB();

// Middleware


const allowedOrigins = [
  'http://localhost:3000',
  'https://investkoree.onrender.com',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow credentials (cookies, Authorization headers, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers to allow
};

app.options('*', cors(corsOptions)); // Handle preflight requests globally
 // Ensure this is above all routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('CORS Middleware triggered for:', req.method, req.path);
  next();
});


// app.use('/upload', express.static(path.join(__dirname, '../../client-side/Public/upload')));

// Route definitions
app.use("/users", signupRoute);
app.use("/founderpost", founderPostRoute);
app.use("/users/auth", loginRoute);
app.use("/adminpost", founderFormPostRoute);
// app.use('/users', userRoutes);
app.use('/api', userSpecificRoute);
app.use('/investments', investmentRoute); 
app.use('/api', userPostsRoute);
app.use('/api', allPostsRoute);


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