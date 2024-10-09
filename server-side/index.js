const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

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
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    const projectCollection = client.db("InvestkoreeDB").collection("ProjectCol");

    // Fetch projects sorted by insertion order and limit to 3
    app.get('/ProjectCol', async (req, res) => {
      try {
        // const result = await projectCollection.find({}).sort({ $natural: -1 }).limit(3).toArray();
        const result = await projectCollection.find().toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).send("Failed to fetch projects.");
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
