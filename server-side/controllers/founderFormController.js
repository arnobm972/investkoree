import FounderPost from '../models/founderFormPostModels.js';
import formidable from 'formidable';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define upload path and ensure it exists
const uploadDir = path.join(__dirname, '../../client-side/Public/upload');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
export const createFounderPost = async (req, res) => {
  const form = formidable({
    uploadDir: uploadDir,
    keepExtensions: true,
  });

  const parseForm = () => {
    return new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("Error parsing the files:", err);
          return reject(new Error("File upload failed"));
        }
        resolve({ fields, files });
      });
    });
  };

  try {
    const { fields, files } = await parseForm();

    console.log("Parsed fields:", fields);
    console.log("Parsed files:", files);

    const userId = req.user._id; // Make sure req.user is populated by authentication middleware

    // Validate required fields
    const requiredFields = [
      "businessName", "email", "address", "phone", "businessCategory", "businessSector",
      "fundingHelp", "returnPlan", "projectedROI", "businessSafety"
    ];

    for (const field of requiredFields) {
      if (!fields[field]) {
        return res.status(400).json({ error: `${field} is required.` });
      }
    }

    // Handle file fields (support multiple files for businessPic)
    const businessPic = Array.isArray(files.businessPicture) 
      ? files.businessPicture.map(file => file.filepath) 
      : [files.businessPicture?.filepath || ''];

    if (!businessPic.length) {
      return res.status(400).json({ error: "At least one business picture is required." });
    }

    // Handle other file fields
    const nidFile = Array.isArray(files.nidCopy) 
      ? files.nidCopy[0].filepath 
      : files.nidCopy?.filepath || '';
      const tinFile = Array.isArray(files.tinCopy) 
      ? files.tinCopy[0].filepath 
      : files.tinCopy?.filepath || '';
    
    const taxFile = Array.isArray(files.taxCopy) 
      ? files.taxCopy[0].filepath 
      : files.taxCopy?.filepath || '';
    
    const tradeLicenseFile = Array.isArray(files.tradeLicense) 
      ? files.tradeLicense[0].filepath 
      : files.tradeLicense?.filepath || '';
    
    const bankStatementFile = Array.isArray(files.bankStatement) 
      ? files.bankStatement[0].filepath 
      : files.bankStatement?.filepath || '';
    
    const securityFile = Array.isArray(files.securityFile) 
      ? files.securityFile[0].filepath 
      : files.securityFile?.filepath || '';
    
    const financialFile = Array.isArray(files.financialFile) 
      ? files.financialFile[0].filepath 
      : files.financialFile?.filepath || '';

    // Create a new FounderPost document in MongoDB
    const newPost = new FounderPost({
      userId,
      businessName: fields.businessName,
      email: fields.email,
      address: fields.address,
      phone: fields.phone,
      businessCategory: fields.businessCategory,
      businessSector: fields.businessSector,
      investmentDuration: fields.investmentDuration,
      securityOption: fields.securityOption,
      otherSecurityOption: fields.otherSecurityOption,
      documentationOption: fields.documentationOption,
      otherDocumentationOption: fields.otherDocumentationOption,
      assets: fields.assets,
      revenue: fields.revenue,
      fundingAmount: fields.fundingAmount,
      fundingHelp: fields.fundingHelp,
      returnPlan: fields.returnPlan,
      businessSafety: fields.businessSafety,
      additionalComments: fields.additionalComments,
      businessPic,
      nidFile,
      tinFile,
      taxFile,
      tradeLicenseFile,
      bankStatementFile,
      securityFile,
      financialFile,
      returndate: fields.returndate,
      projectedROI: fields.projectedROI
    });

    await newPost.save();

    res.status(201).json({ message: "Founder post created successfully!" });
  } catch (error) {
    console.error("Error creating founder post:", error);
    res.status(500).json({ error: error.message || "Server error" });
  }
};