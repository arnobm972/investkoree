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


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


connectDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

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
app.use("/founderpost", founderFormPostRoute);
// app.use('/users', userRoutes);
app.use('/api', userSpecificRoute);
app.use('/api', investmentRoute); 
app.use('/api', userPostsRoute);


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