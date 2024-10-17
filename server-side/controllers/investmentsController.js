import Investments from '../models/investmentModel.js';

// @desc Get all investments
// @route GET /api/investments
// @access Public
export const getInvestments = async (req, res) => {
  try {
    const investments = await Investments.find({ status: 'active' }); // Fetch active investments
    res.json(investments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch investments' });
  }
};