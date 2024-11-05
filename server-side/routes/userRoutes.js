
import express from 'express';
import authMiddleware from '../utils/authMiddleware.js';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/profile', authMiddleware.authToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // Exclude password
        if (!user) return res.status(404).json({ message: 'User not found.' });
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
