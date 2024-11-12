import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { createFounderPost } from '../controllers/founderFormController.js';
import { authToken } from '../utils/authMiddleware.js';

const router = express.Router();

// Configure multer for file upload using disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/'; // Ensure this directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir); // Create the directory if it doesn't exist
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Preserve the original file extension
  }
});

// Create the multer instance
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|pdf|doc|txt|ppt/; // Allowed file types
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Error: File type not allowed!'));
    }
  }
});

// Multiple image fields and single file upload
const cpUpload = upload.fields([
  { name: "businessPicture", maxCount: 10 }, // multiple images
  { name: "nidCopy", maxCount: 1 }, // single file
  { name: "tinCopy", maxCount: 1 },
  { name: "taxCopy", maxCount: 1 },
  { name: "tradeLicense", maxCount: 1 },
  { name: "bankStatement", maxCount: 1 },
  { name: "securityFile", maxCount: 1 },
  { name: "financialFile", maxCount: 1 },
]);

// Define the route for creating a founder post
router.post("/postdata", authToken, cpUpload, (req, res, next) => {
    console.log("Files in req.files:", req.files);
    next();
}, createFounderPost);

export default router;