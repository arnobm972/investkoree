import PendingPost from '../models/pendingPost.js';
import FounderPending from '../models/founderpending.js';
import {sanitizeFilename} from '../utils/sanitize.js' // Import the sanitize function

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
      returnPlan, businessSafety, additionalComments, description,
    } = req.body;

    // Prepare the new post
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
      returndate,
      projectedROI,
      description,
      businessPictures: req.files?.businessPicture
        ? req.files.businessPicture.map(file => ({
            data: file.buffer,
            contentType: file.mimetype,
            filename: sanitizeFilename(file.originalname), // Sanitize the filename
          }))
        : [],
      nidFile: req.files?.nidCopy?.[0]
        ? {
            data: req.files.nidCopy[0].buffer,
            contentType: req.files.nidCopy[0].mimetype,
            filename: sanitizeFilename(req.files.nidCopy[0].originalname), // Sanitize the filename
          }
        : null,
      tinFile: req.files?.tinCopy?.[0]
        ? {
            data: req.files.tinCopy[0].buffer,
            contentType: req.files.tinCopy[0].mimetype,
            filename: sanitizeFilename(req.files.tinCopy[0].originalname), // Sanitize the filename
          }
        : null,
      taxFile: req.files?.taxCopy?.[0]
        ? {
            data: req.files.taxCopy[0].buffer,
            contentType: req.files.taxCopy[0].mimetype,
            filename: sanitizeFilename(req.files.taxCopy[0].originalname), // Sanitize the filename
          }
        : null,
      tradeLicenseFile: req.files?.tradeLicense?.[0]
        ? {
            data: req.files.tradeLicense[0].buffer,
            contentType: req.files.tradeLicense[0].mimetype,
            filename: sanitizeFilename(req.files.tradeLicense[0].originalname), // Sanitize the filename
          }
        : null,
      bankStatementFile: req.files?.bankStatement?.[0]
        ? {
            data: req.files.bankStatement[0].buffer,
            contentType: req.files.bankStatement[0].mimetype,
            filename: sanitizeFilename(req.files.bankStatement[0].originalname), // Sanitize the filename
          }
        : null,
      securityFile: req.files?.securityFile?.[0]
        ? {
            data: req.files.securityFile[0].buffer,
            contentType: req.files.securityFile[0].mimetype,
            filename: sanitizeFilename(req.files.securityFile[0].originalname), // Sanitize the filename
          }
        : null,
      financialFile: req.files?.financialFile?.[0]
        ? {
            data: req.files.financialFile[0].buffer,
            contentType: req.files.financialFile[0].mimetype,
            filename: sanitizeFilename(req.files.financialFile[0].originalname), // Sanitize the filename
          }
        : null,
      videoFile: req.files?.video?.[0]
        ? {
            data: req.files.video[0].buffer,
            contentType: req.files.video[0].mimetype,
            filename: sanitizeFilename(req.files.video[0].originalname), // Sanitize the filename
          }
        : null,
    });

    // Save the new post to the PendingPost collection
    const savedPost = await newPost.save();

    // Create a reference in FounderPending collection
    const founderPendingPost = new FounderPending({
      pendingPostId: savedPost._id, // Reference the original post
      userId,
      status: "Pending Approval",
    });

    await founderPendingPost.save();

    res.status(201).json({
      message: "Founder post created successfully and saved for pending approval!",
      postId: savedPost._id,
    });
  } catch (error) {
    console.error("Error creating founder post:", error);
    res.status(500).json({ error: "An error occurred while creating the founder post." });
  }
};
