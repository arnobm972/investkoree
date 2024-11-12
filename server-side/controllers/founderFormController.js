import FounderPost from '../models/founderFormPostModels.js';
import axios from 'axios';
import FormData from 'form-data';

// Handle founder post creation
export const createFounderPost = async (req, res) => {
    console.log("Request Body:", req.body);
    console.log("Request Files:", req.files);
  console.log("User  ID:", req.user?._id);
  
  try {
    // Extract userId from the authenticated user
    const userId = req.user._id; // Assuming req.user is populated by your authentication middleware

    const {
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp, returndate, projectedROI,
      returnPlan, businessSafety, additionalComments
    } = req.body;

    // Function to handle file uploads to ImgBB
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
    const businessPictures = req.files.businessPicture ? await Promise.all(req.files.businessPicture.map(uploadToImgbb)) : [];

    // Upload single files and get their URLs
// Upload single files and get their URLs
const uploadSingleFile = async (file) => {
    return file && file.length > 0 ? await uploadToImgbb(file[0]) : "";
  };
  
  const nidFile = await uploadSingleFile(req.files.nidCopy);
  const tinFile = await uploadSingleFile(req.files.tinCopy);
  const taxFile = await uploadSingleFile(req.files.taxCopy);
  const tradeLicenseFile = await uploadSingleFile(req.files.tradeLicense);
  const bankStatementFile = await uploadSingleFile(req.files.bankStatement);
  const securityFile = await uploadSingleFile(req.files.securityFile);
  const financialFile = await uploadSingleFile(req.files.financialFile);

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
      businessPictures, // Store array of URLs
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

    // Save the new post to the database
    await newPost.save();

    // Respond with success message
    res.status(201).json({ message: "Founder post created successfully!" });
  } catch (error) {
    console.error("Error creating founder post:", error);
    res.status(500).json({ error: "Server error" });
  }
};