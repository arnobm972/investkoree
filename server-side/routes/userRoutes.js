import express from 'express';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import admin from 'firebase-admin';
import bcrypt from 'bcrypt';

const router = express.Router();


admin.initializeApp({
  credential: admin.credential.applicationDefault(), 
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
router.post('/users', async (req, res) => {
  const { email, username, password, role } = req.body;

 
  if (!email || !username || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      name: username,
      password: hashedPassword, 
      role,
    });
    await newUser.save();

   
    const jwtToken = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token: jwtToken, user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Protected content', user: req.user });
});

export default router;
