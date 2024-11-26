import PendingPost from '../models/pendingPost.js';
import FounderPending from '../models/founderpending.js';
import axios from 'axios';
import FormData from 'form-data';
import path from 'path';

// Handle founder post creation
export const createFounderPost = async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Request Files:", req.files);
  console.log("User   ID:", req.user?.id);

  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({ error: "User  ID is required." });
    }

    const {
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp, returndate, projectedROI,
      returnPlan, businessSafety, additionalComments, description,
      sanitizedBusinessPictures, sanitizedNidName, sanitizedTinName,
      sanitizedTaxName, sanitizedTradeLicenseName, sanitizedBankStatementName,
      sanitizedSecurityName, sanitizedFinancialName, sanitizedVideoName
    } = req.body;

    const uploadToImgbb = async (fileBuffer, filename) => {
      const formData = new FormData();
      formData.append('image', fileBuffer, {
        filename: filename,
        contentType: 'image/jpeg' // Assuming all images are JPEG; adjust if necessary
      });

      const response = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      return response.data.data.url;
    };

    // Upload business pictures
    const businessPictures = req.files.businessPicture 
      ? await Promise.all(req.files.businessPicture.map((file, index) => 
          uploadToImgbb(file.buffer, sanitizedBusinessPictures[index])
        )) 
      : [];

    const uploadSingleFile = async (file, sanitizedName) => {
      if (file && file.length > 0 && file[0].buffer) {
        return await uploadToImgbb(file[0].buffer, sanitizedName);
      }
      return "";
    };

    const nidFile = await uploadSingleFile(req.files.nidCopy, sanitizedNidName);
    const tinFile = await uploadSingleFile(req.files.tinCopy, sanitizedTinName);
    const taxFile = await uploadSingleFile(req.files.taxCopy, sanitizedTaxName);
    const tradeLicenseFile = await uploadSingleFile(req.files.tradeLicense, sanitizedTradeLicenseName);
    const bankStatementFile = await uploadSingleFile(req.files.bankStatement, sanitizedBankStatementName);
    const securityFile = await uploadSingleFile(req.files.securityFile, sanitizedSecurityName);
    const financialFile = await uploadSingleFile(req.files.financialFile, sanitizedFinancialName);

    // Handle video file without uploading to ImgBB
    let videoFile = "";
    if (req.files.videoFile && req.files.videoFile.length > 0) {
      const video = req.files.videoFile[0];
      videoFile = {
        originalName: sanitizedVideoName, // Store the sanitized name
        path: video.path // Store the path or URL where the video is saved
      };
    }

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
      videoFile // Store the video file information directly
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