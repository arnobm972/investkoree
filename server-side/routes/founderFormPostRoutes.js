import express from 'express';
import { createFounderPost } from '../controllers/founderFormController.js'; 
import { authToken } from '../utils/authMiddleware.js';

const router = express.Router();

// Use the createFounderPost controller directly as the route handler
router.post('/upload', createFounderPost,authToken);

export default router;
