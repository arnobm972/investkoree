// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import userRoutes from './routes/userRoutes.js';
// import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import investmentRoutes from './routes/investmentRoutes.js';
// import fs from 'fs';
// import founderPostRoutes from './routes/founderPostRoutes.js';
// import bodyParser from 'body-parser';

// dotenv.config();

// // Load environment variables and connect to the database
// connectDB();

// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Ensure upload directory exists
// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Enable CORS with credentials, dynamically setting the origin based on environment
// const allowedOrigins = [
//   'https://investkoree-client-side.vercel.app', // Vercel frontend
//   'http://localhost:3000', // Local development
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true, // Allow credentials (cookies, headers, etc.)
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOptions));

// // Handle preflight requests
// app.options('*', cors(corsOptions));

// // Middleware for parsing JSON, URL-encoded data, and cookies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Routes
// app.use('/api/investments', investmentRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/founderposts', founderPostRoutes);
// app.use(express.static('build'));

// // Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

// // Serve frontend in production mode
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// // Start the server only if not in a serverless environment (like Vercel)
// if (process.env.NODE_ENV !== 'production') {
//   const port = process.env.PORT || 5000;
//   app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
//   });
// }

// // Export the Express app for serverless deployment (e.g., Vercel)
// export default app;
import express from 'express';
import dotenv from 'dotenv';
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@investkoreecluster.dd7wz.mongodb.net/?retryWrites=true&w=majority&appName=InvestkoreeCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res) =>{
    res.send('asd')
} )

app.listen(port,() => {
    console.log(`sdsad ${port}`);
})