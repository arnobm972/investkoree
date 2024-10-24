import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../../config/db.js';
import { notFound, errorHandler } from '../../middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from '../../routes/userRoutes.js'; 

dotenv.config();

const app = express();

connectDB();

// Define allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://luminous-caramel-715e81.netlify.app',
  // 'https://investkoree-server-side.vercel.app'
];

// CORS options
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



app.use(cors(corsOptions)); 

// Handle preflight requests
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

// if (process.env.NODE_ENV !== 'production') {
//   const port = process.env.PORT || 5000;
//   app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
//   });
// }

export default app;