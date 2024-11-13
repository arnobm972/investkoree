import { authToken } from '../utils/authMiddleware.js';
import User from '../models/userModel.js';
router.post('/invest', authToken, async (req, res) => {
    const { postId, postDetails } = req.body; // Include the needed details
    const userId = req.user._id; // Ensure user is authenticated with authToken

    try {
        const user = await User.findById(userId);
        user.investments.push({ postId, ...postDetails });
        await user.save();
        res.status(200).json({ message: 'Investment added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add investment' });
    }
});
// In routes/investmentRoutes.js
router.get('/investments', authToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.status(200).json(user.investments);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve investments' });
    }
});
