import express from 'express';
import { createFounderPost } from '../controllers/founderFormController.js'; 

const router = express.Router();

// Use the createFounderPost controller directly as the route handler
router.post('/upload', createFounderPost);

export default router;
