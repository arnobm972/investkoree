// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// // import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// // import cookieParser from 'cookie-parser';
// import cors from 'cors';
// // import bodyParser from 'body-parser';
// import userRoutes from './routes/userRoutes.js'; 

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;


// app.use(cors());
// connectDB();
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: false }));



// // var whitelist = ["http://localhost:3000", "https://investkoree-1.netlify.app"];
// // var corsOptions = { origin: whitelist, credentials: true };

// // Define allowed origins
// // const allowedOrigins = [
// //   'http://localhost:3000',
// //   'https://luminous-caramel-715e81.netlify.app',
// //   // 'https://investkoree-server-side.vercel.app'
// // ];

// // // CORS options
// // const corsOptions = {
// //   origin: function (origin, callback) {
// //     if (allowedOrigins.includes(origin) || !origin) {
// //       callback(null, true);
// //     } else {
// //       callback(new Error('Not allowed by CORS'));
// //     }
// //   },
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true,
// //   optionsSuccessStatus: 200,
// // };



// // app.use(cors(corsOptions)); 

// // Handle preflight requests
 

// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(cookieParser());

// app.use('/api/users', userRoutes);

// // app.use(notFound);
// // app.use(errorHandler);


// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });


// export default app;
// Import required modules
import express from 'express';
import helmet from "helmet";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Define allowed origins, including your Render frontend URL
const allowedOrigins = [
  'http://localhost:3000',
  'https://investkoree.onrender.com', // Replace with your actual Render frontend URL
];

// Set up CORS options to restrict origins
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