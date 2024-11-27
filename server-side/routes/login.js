import express from "express";
import cors from "cors";
import loginController from "../controllers/login.js";
import { body, validationResult } from 'express-validator';

const router = express.Router();
router.use(cors());

// Login route with validation
router.post(
  "/login", 
  [
    body('username').trim().escape().notEmpty().withMessage('Username is required'), // Example validation
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters').escape()
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // If validation passes, proceed to the login controller
  },
  loginController.login
);

router.post("/refresh-token", loginController.refreshToken);

export default router;
