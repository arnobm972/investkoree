import FounderPost from '../models/founderFormPostModels.js';
import formidable from 'formidable';
import path from 'path';

export const createFounderPost = async (req, res) => {
  const form = formidable({
    uploadDir: path.join(__dirname, '../../client-side/Public/upload'),
    keepExtensions: true,
  });

  // Wrap form.parse in a Promise to use async/await
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

    const userId = req.user._id; // Make sure req.user is populated by authentication middleware

    // Destructure fields from the form data
    const {
      businessName, email, address, phone, businessCategory, businessSector,
      investmentDuration, securityOption, otherSecurityOption, documentationOption,
      otherDocumentationOption, assets, revenue, fundingAmount, fundingHelp, returndate,
      projectedROI, returnPlan, businessSafety, additionalComments
    } = fields;

    // Validate required fields
    if (!businessName || !email || !address || !phone || !businessCategory || !businessSector) {
      return res.status(400).json({ error: "Please fill in all required fields." });
    }

    // Destructure file paths from the files object
    const businessPic = Array.isArray(files.businessPicture) 
      ? files.businessPicture.map(file => file.filepath) 
      : [files.businessPicture?.filepath || ''];
    
    const nidFile = files.nidCopy?.filepath || '';
    const tinFile = files.tinCopy?.filepath || '';
    const taxFile = files.taxCopy?.filepath || '';
    const tradeLicenseFile = files.tradeLicense?.filepath || '';
    const bankStatementFile = files.bankStatement?.filepath || '';
    const securityFile = files.securityFile?.filepath || '';
    const financialFile = files.financialFile?.filepath || '';

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
      businessPic,
      nidFile,
      tinFile,
      taxFile,
      tradeLicenseFile,
      bankStatementFile,
      securityFile,
      financialFile,
      returndate,
      projectedROI
    });

    await newPost.save();

    res.status(201).json({ message: "Founder post created successfully!" });
  } catch (error) {
    console.error("Error creating founder post:", error);
    res.status(500).json({ error: error.message || "Server error" });
  }
};