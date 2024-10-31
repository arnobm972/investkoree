import express from 'express';
import multer from 'multer';
import path from 'path';
import FounderPost from '../models/founderPostModels.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // Save files in an 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save files with unique names
  },
});

const upload = multer({ storage });


const cpUpload = upload.fields([
  { name: "businessPicture", maxCount: 1 }, // multiple images
  { name: "nidCopy", maxCount: 1 }, // single file
  { name: "tinCopy", maxCount: 1 }, 
  { name: "taxCopy", maxCount: 1 },
  { name: "tradeLicense", maxCount: 1 },
  { name: "bankStatement", maxCount: 1 },
  { name: "securityFile", maxCount: 1 },
  { name: "financialFile", maxCount: 1 },
]);

// Handle founder post creation
router.post("/postdata", cpUpload, async (req, res) => {
  try {
    
    const {
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp,
      returnPlan, businessSafety, additionalComments
    } = req.body;

    
    const businessPic = req.files.businessPicture && req.files.businessPicture.length > 0 ? req.files.businessPicture[0].path : "";
    const nidFile = req.files.nidCopy && req.files.nidCopy.length > 0 ? req.files.nidCopy[0].path : "";
    const tinFile = req.files.tinCopy && req.files.tinCopy.length > 0 ? req.files.tinCopy[0].path : "";
    const taxFile = req.files.taxCopy && req.files.taxCopy.length > 0 ? req.files.taxCopy[0].path : "";
    const tradeLicenseFile = req.files.tradeLicense && req.files.tradeLicense.length > 0 ? req.files.tradeLicense[0].path : "";
    const bankStatementFile = req.files.bankStatement && req.files.bankStatement.length > 0 ? req.files.bankStatement[0].path : "";
    const securityFile = req.files.securityFile && req.files.securityFile.length > 0 ? req.files.securityFile[0].path : "";
    const financialFile = req.files.financialFile && req.files.financialFile.length > 0 ? req.files.financialFile[0].path : "";

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
