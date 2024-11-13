// routes/investmentRoutes.js
import express from 'express';
import { getInvestments } from '../controllers/investmentsController.js';

const router = express.Router();


router.get('/', getInvestments);

export default router;
