import express from 'express';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import admin from 'firebase-admin';
import bcrypt from 'bcrypt'; // Import bcrypt

const router = express.Router();

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(), // or use your service account
});

// Middleware to verify Firebase token
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

// Route to register a user
router.post('/', async (req, res) => {
  const { email, username, password, role } = req.body; // Include password

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Adjust the salt rounds if needed

    const newUser = new User({
      email,
      name: username,
      password: hashedPassword, // Use the hashed password
      role,
    });
    await newUser.save();

    // Create JWT token
    const jwtToken = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token: jwtToken, user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Example of a protected route
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Protected content', user: req.user });
});

export default router;
