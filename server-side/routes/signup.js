import express from 'express';
import signupController from '../controllers/signup.js';
import cors from 'cors';

const router = express.Router();
router.use(cors());

router.post("/register", signupController.createUser);

export default router;