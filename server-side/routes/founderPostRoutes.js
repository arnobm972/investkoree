import express from 'express';
import multer from 'multer';
import path from 'path';
import FounderPost from '../models/founderPostModels.js';


const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in an 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save files with unique names
  },
});

const upload = multer({ storage });

// Multiple image fields and single file uploads
const cpUpload = upload.fields([
  { name: "images", maxCount: 5 }, // multiple images
  { name: "nidCopy", maxCount: 1 }, // single file
  { name: "tinCopy", maxCount: 1 }, 
  { name: "taxCopy", maxCount: 1 },
  { name: "tradeLicense", maxCount: 1 },
  { name: "bankStatement", maxCount: 1 },
  { name: "securityFile", maxCount: 1 },
  { name: "financialFile", maxCount: 1 },
]);

// Handle founder post creation
router.post("/founderpost", cpUpload, async (req, res) => {
  try {
    const {
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp,
      returnPlan, businessSafety, additionalComments
    } = req.body;

    // Collect file paths for saving in the database
    const images = req.files.images ? req.files.images.map(file => file.path) : [];
    const nidFile = req.files.nidCopy ? req.files.nidCopy[0].path : "";
    const tinFile = req.files.tinCopy ? req.files.tinCopy[0].path : "";
    const taxFile = req.files.taxCopy ? req.files.taxCopy[0].path : "";
    const tradeLicenseFile = req.files.tradeLicense ? req.files.tradeLicense[0].path : "";
    const bankStatementFile = req.files.bankStatement ? req.files.bankStatement[0].path : "";
    const securityFile = req.files.securityFile ? req.files.securityFile[0].path : "";
    const financialFile = req.files.financialFile ? req.files.financialFile[0].path : "";

    // Create a new FounderPost document in MongoDB
    const newPost = new FounderPost({
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp,
      returnPlan, businessSafety, additionalComments, images, nidFile, tinFile,
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
