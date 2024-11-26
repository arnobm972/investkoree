import PendingPost from '../models/pendingPost.js';
import FounderPending from '../models/founderpending.js';
import axios from 'axios';
import FormData from 'form-data';

// Handle founder post creation
export const createFounderPost = async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Request Files:", req.files);
  console.log("User ID:", req.user?.id);
  
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    const {
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp, returndate, projectedROI,
      returnPlan, businessSafety, additionalComments, description
    } = req.body;

    const uploadToImgbb = async (fileBuffer) => {
      const formData = new FormData();
      formData.append('image', fileBuffer, {
        filename: 'image.jpg', 
        contentType: 'image/jpeg'
      });

      const response = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      return response.data.data.url;
    };

    const businessPictures = req.files.businessPicture 
      ? await Promise.all(req.files.businessPicture.map(file => uploadToImgbb(file.buffer))) 
      : [];

    const uploadSingleFile = async (file) => {
      if (file && file.length > 0 && file[0].buffer) {
        return await uploadToImgbb(file[0].buffer);
      }
      return "";
    };

    const nidFile = await uploadSingleFile(req.files.nidCopy);
    const tinFile = await uploadSingleFile(req.files.tinCopy);
    const taxFile = await uploadSingleFile(req.files.taxCopy);
    const tradeLicenseFile = await uploadSingleFile(req.files.tradeLicense);
    const bankStatementFile = await uploadSingleFile(req.files.bankStatement);
    const securityFile = await uploadSingleFile(req.files.securityFile);
    const financialFile = await uploadSingleFile(req.files.financialFile);

    const newPost = new PendingPost({
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
      businessPictures,
      nidFile,
      tinFile,
      description,
      taxFile,
      tradeLicenseFile,
      bankStatementFile,
      securityFile,
      financialFile,
      returndate,
      projectedROI,
    });

    // Save the new post to the PendingPost collection
    const savedPost = await newPost.save();

    // Create a new document in FounderPending collection
    const founderPendingPost = new FounderPending({
      ...savedPost._doc, // Use the saved data from PendingPost
    });

    await founderPendingPost.save();

    res.status(201).json({ message: "Founder post created successfully and saved to pending approval!" });
  } catch (error) {
    console.error("Error creating founder post:", error);
    res.status(500).json({ error: "Server error" });
  }
};
