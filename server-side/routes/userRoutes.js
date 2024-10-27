import express from 'express';
import bcrypt from 'bcrypt';
import admin from '../firebaseAdmin.js';
import User from '../models/userModel.js';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

dotenv.config();

const router = express.Router();

// Middleware to verify Firebase token
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (!decodedToken || !decodedToken.uid) {
      throw new Error('Invalid token structure');
    }
    req.user = { id: decodedToken.uid, ...decodedToken }; // Store user info in req.user
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(401).json({ message: 'Unauthorized access' });
  }
};

// Registration Route
router.post(
  '/',
  [
    body('email').isEmail().withMessage('Invalid email format'),
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('role').notEmpty().withMessage('Role is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, username, password, role } = req.body;

    try {
      // Check if the user already exists
      const existingUser  = await User.findOne({ email });
      if (existingUser ) {
        return res.status(400).json({ message: 'User  already exists' });
      }

      // Create user in Firebase and get UID
      const userRecord = await admin.auth().createUser ({
        email,
        password,
        displayName: username,
      });

      // Create a new user in MongoDB
      const newUser  = new User({
        name: username,
        email,
        password: await bcrypt.hash(password, 10), // Hash the password
        firebaseUID: userRecord.uid, // Store Firebase UID
        role,
      });

      await newUser .save();

      res.status(201).json({ user: newUser  });
    } catch (error) {
      console.error("Registration error:", error.message);
      res.status(500).json({ message: 'Registration failed' });
    }
  }
);

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create a Firebase token
    const firebaseToken = await admin.auth().createCustomToken(user.firebaseUID);

    res.status(200).json({ user: { ...user.toObject(), password: undefined }, firebaseToken });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: 'Login failed' });
  }
});

// Protected route to get user details
router.get('/details', verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({ firebaseUID: req.user.id }).select('-password'); // Exclude password from response
    if (!user) {
      return res.status(404).json({ message: 'User  not found' });
    }
    res.status( 200).json(user);
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    res.status(500).json({ message: 'Failed to fetch user details' });
  }
});

// Example protected route
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Protected content', user: req.user });
});

export default router;