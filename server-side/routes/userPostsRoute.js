// routes/userPostsRoute.js
import express from 'express';
import { getUserPosts } from '../controllers/userPostsController.js'; // Import the controller function

const router = express.Router();

// Route to get posts by user ID
router.get('/:userId/posts', getUserPosts);

export default router;