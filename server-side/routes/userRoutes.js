import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import admin from '../firebaseAdmin.js';
import User from '../models/userModel.js';
import dotenv from 'dotenv';

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
    req.user = { id: decodedToken.uid, ...decodedToken };
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(401).json({ message: 'Unauthorized access' });
  }
};

// Route to register a user
router.post('/', async (req, res) => {
  const { email, username, password, role } = req.body;

  if (!email || !username || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      name: username,
      password: hashedPassword,
      role,
    });
    await newUser.save();

    // Create a JWT token
    const jwtToken = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ token: jwtToken, user: newUser });
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Route for user login
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

    // Create a JWT token
    const jwtToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token: jwtToken, user });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: 'Login failed' });
  }
});

// Protected route to get user details
router.get('/details', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from response
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
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
