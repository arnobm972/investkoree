import Investment from '../models/investmentModel.js';

router.post("/invest", async (req, res) => {
    const { _id, businessName, returndate, startDate, userId, investmentAmount } = req.body;
  
    try {
      const newInvestment = new Investment({
        projectId: _id,
        businessName,
        returndate,
        startDate,
        userId, // Include userId if you want to track which user made the investment
        // investmentAmount, // Include investment amount
      });
  
      await newInvestment.save();
      res.status(201).json({ message: "Investment recorded successfully", investment: newInvestment });
    } catch (error) {
      console.error("Error saving investment:", error);
      res.status(500).json({ message: "Error saving investment" });
    }
  });
  router.get('/investments', async (req, res) => {
    try {
      const investments = await Investment.find();
      res.status(200).json(investments);
    } catch (error) {
      console.error('Error fetching investments:', error);
      res.status(500).json({ message: 'Error fetching investments' });
    }
  });
  
export default router;