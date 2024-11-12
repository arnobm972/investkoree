import FounderPost from '../models/founderFormPostModels.js';
import axios from 'axios';
import FormData from 'form-data';

// Handle founder post creation
export const createFounderPost = async (req, res) => {
  console.log("Files received:", JSON.stringify(req.files, null, 2));
  try {
    // Extract userId from the authenticated user
    const userId = req.user._id; // Assuming req.user is populated by your authentication middleware

    const {
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp, returndate, projectedROI,
      returnPlan, businessSafety, additionalComments
    } = req.body;

    // Handle file uploads to Imgbb
    const uploadToImgbb = async (file) => {
      const formData = new FormData();
      formData.append('image', file.buffer); // Use the buffer directly

      const response = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      return response.data.data.url; // Return the image URL
    };

    // Upload business pictures (multiple)
    const businessPics = req.files.businessPicture ? await Promise.all(req.files.businessPicture.map(uploadToImgbb)) : [];

    // Upload single files
    const nidFile = req.files.nidCopy && req.files.nidCopy.length > 0 ? await uploadToImgbb(req.files.nidCopy[0]) : "";
    const tinFile = req.files.tinCopy && req.files.tinCopy.length > 0 ? await uploadToImgbb(req.files.tinCopy[0]) : "";
    const taxFile = req.files.taxCopy && req.files.taxCopy.length > 0 ? await uploadToImgbb(req.files.taxCopy[0]) : "";
    const tradeLicenseFile = req.files.tradeLicense && req.files.tradeLicense.length > 0 ? await uploadToImgbb(req.files.tradeLicense[0]) : "";
    const bankStatementFile = req.files.bankStatement && req.files.bankStatement.length > 0 ? await uploadToImgbb(req.files.bankStatement[0]) : "";
    const securityFile = req.files.securityFile && req.files.securityFile.length > 0 ? await uploadToImgbb(req.files.securityFile[0]) : "";
    const financialFile = req.files.financialFile && req.files.financialFile.length > 0 ? await uploadToImgbb(req.files.financialFile[0]) : "";

    // Create a new FounderPost document in MongoDB
    const newPost = new FounderPost({
      userId,
      businessName,
      email,
      address,
      phone,
      businessCategory,
      businessSector,
      investmentDuration,
      securityOption,
      otherSecurityOption,
      documentationOption,
      otherDocumentationOption,
      assets,
      revenue,
      fundingAmount,
      fundingHelp,
      returnPlan,
      businessSafety,
      additionalComments,
      businessPics, // Store array of URLs
      nidFile,
      tinFile,
      taxFile,
      tradeLicenseFile,
      bankStatementFile,
      securityFile,
      financialFile,
      returndate,
      projectedROI,
    });

    await newPost.save();

    res.status(201).json({ message: "Founder post created successfully!" });
  } catch (error) {
    console.error("Error creating founder post:", error);
    res.status(500).json({ error: "Server error" });
  }
};