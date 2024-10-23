import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js'; 

dotenv.config();

const app = express();

connectDB();


const allowedOrigins = [
  'http://localhost:3000', // Local development
   'https://luminous-caramel-715e81.netlify.app' // Add your production frontend URL here
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


app.options('*', cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes); 

app.use(notFound);
app.use(errorHandler);


if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}


export default app;

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

// dotenv.config();

// // Initialize the Express app
// const app = express();

// // Set up middleware
// app.use(cors());
// app.use(express.json());

// // Port configuration
// const port = process.env.PORT || 5000;

// // MongoDB client setup
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s2iwh9r.mongodb.net/?retryWrites=true&w=majority`;


// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);
// // Example route
// app.get('/', async (req, res) => {
//   res.send('API is running...');
// });

// // Start the server
// app.listen(port, async () => {
//   console.log(`Server is running on port ${port}`);

//   // Connect to MongoDB when the server starts
 
// });
