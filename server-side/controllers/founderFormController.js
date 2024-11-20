import PendingPost from '../models/pendingPost.js';
import axios from 'axios';
import FormData from 'form-data';

// Handle founder post creation
export const createFounderPost = async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Request Files:", req.files);
  console.log("User ID:", req.user?._id);
  
  try {
    const userId = req.user._id; // Assuming req.user is populated by your authentication middleware

    const {
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp, returndate, projectedROI,
      returnPlan, businessSafety, additionalComments,description
    } = req.body;

    // Function to handle file uploads to ImgBB
    const uploadToImgbb = async (fileBuffer) => {
      const formData = new FormData();
      formData.append('image', fileBuffer, {
        filename: 'image.jpg', 
        contentType: 'image/jpeg' // Specify the content type
      });

      const response = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      console.log("Uploaded Image URL:", response.data.data.url); // Log the URL
      return response.data.data.url; // Return the image URL
    };
    // Upload business pictures (multiple)
    const businessPictures = req.files.businessPicture 
      ? await Promise.all(req.files.businessPicture.map(file => uploadToImgbb(file.buffer))) 
      : [];
      console.log("Business Pictures URLs:", businessPictures); 

    // Function to upload single files and get their URLs
    const uploadSingleFile = async (file) => {
      if (file && file.length > 0) {
        const fileBuffer = file[0].buffer; // Use the file buffer
        return await uploadToImgbb(fileBuffer); // Upload to ImgBB and return URL
      }
      return ""; // Return empty string if no file
    };

    // Upload single files and get their URLs
    const nidFile = await uploadSingleFile(req.files.nidCopy);
    const tinFile = await uploadSingleFile(req.files.tinCopy);
    const taxFile = await uploadSingleFile(req.files.taxCopy);
    const tradeLicenseFile = await uploadSingleFile(req.files.tradeLicense);
    const bankStatementFile = await uploadSingleFile(req.files.bankStatement);
    const securityFile = await uploadSingleFile(req.files.securityFile);
    const financialFile = await uploadSingleFile(req.files.financialFile);

    // Create a new FounderPost document in MongoDB
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
      businessPictures, // Store array of URLs
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

    // Save the new post to the database
    await newPost.save();

    // Respond with success message
    res.status(201).json({ message: "Founder post created successfully!" });
  } catch (error) {
    console.error("Error creating founder post:", error);
    res.status(500).json({ error: "Server error" });
  }
};
