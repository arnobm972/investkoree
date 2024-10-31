// server-side/routes/founderRoutes.js
import express from 'express';
import founderPost from '../models/founderPostModel.js';
const router = express.Router();
// Route to get all latest posts
router.get('/latestposts', async (req, res) => {
  try {
    const latestPosts = await founderPost.find().sort({ createdAt: -1 }); // Sort by creation date (latest first)
    res.status(200).json(latestPosts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching latest posts", error });
  }
});

export default router;
