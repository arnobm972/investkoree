import express from 'express';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = decoded; // Attach the decoded user info to the request
    next();
  });
};

// Route to register a user
router.post('/', async (req, res) => {
  const { email, username, password, role } = req.body;

  if (!email || !username || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser  = new User({
      email,
      name: username,
      password: hashedPassword, 
      role,
    });
    await newUser .save();

    // Create a JWT token
    const jwtToken = jwt.sign({ id: newUser ._id, role: newUser .role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token: jwtToken, user: newUser  });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    const jwtToken = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token: jwtToken, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Example protected route
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Protected content', user: req.user });
});

export default router;