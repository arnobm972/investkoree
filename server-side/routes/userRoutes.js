import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import session from 'express-session';

const router = express.Router();

// Configure session middleware with default memory store
const sessionOptions = {
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2, // 2 hours
    secure: false, // Set to true if using HTTPS
  },
};

router.use(session(sessionOptions));

// Route to register a user
router.post('/', async (req, res) => {
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

    res.status(201).json({ user: newUser });
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

    // Save user ID in the session
    req.session.userId = user._id;

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get user details
router.get('/me', async (req, res) => {
  console.log("Session data:", req.session);
  if (!req.session.userId) {
    console.log("Session data:", req.session);
    return res.status(401).json({ message: 'Unauthorized' ,});
  }

  try {
    const user = await User.findById(req.session.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




// Example protected route
router.get('/protected', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.status(200).json({ message: 'Protected content', userId: req.session.userId });
});

export default router;
