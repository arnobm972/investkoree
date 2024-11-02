import express from 'express';
import FounderPost from '../models/founderFormPostModels.js';

const router = express.Router();

// Handle founder post creation
router.post("/postdata", async (req, res) => {
  try {
    const {
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp,
      returnPlan, businessSafety, additionalComments
    } = req.body;

    // Collect file paths for saving in the database
    const businessPic = req.files?.businessPicture?.[0]?.path || "";
    const nidFile = req.files?.nidCopy?.[0]?.path || "";
    const tinFile = req.files?.tinCopy?.[0]?.path || "";
    const taxFile = req.files?.taxCopy?.[0]?.path || "";
    const tradeLicenseFile = req.files?.tradeLicense?.[0]?.path || "";
    const bankStatementFile = req.files?.bankStatement?.[0]?.path || "";
    const securityFile = req.files?.securityFile?.[0]?.path || "";
    const financialFile = req.files?.financialFile?.[0]?.path || "";

    // Create a new FounderPost document in MongoDB
    const newPost = new FounderPost({
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp,
      returnPlan, businessSafety, additionalComments, businessPic, nidFile, tinFile,
      taxFile, tradeLicenseFile, bankStatementFile, securityFile, financialFile
    });

    await newPost.save();
    res.status(201).json({ message: "Founder post created successfully!" });
  } catch (error) {
    console.error("Error creating founder post:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
