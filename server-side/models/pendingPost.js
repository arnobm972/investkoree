// models/PendingPost.js
import mongoose from 'mongoose';

const pendingPostSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User ', index: true },
  businessName: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  description: { type: String, required: true },
  businessCategory: { type: String, required: true },
  businessSector: { type: String, required: true },
  investmentDuration: { type: String, required: true },
  securityOption: { type: String, required: true },
  otherSecurityOption: { type: String },
  documentationOption: { type: String, required: true },
  otherDocumentationOption: { type: String },
  assets: { type: String, required: true },
  revenue: { type: String, required: true },
  fundingAmount: { type: String, required: true },
  fundingHelp: { type: String, required: true },
  returnPlan: { type: String, required: true },
  businessSafety: { type: String, required: true },
  additionalComments: { type: String },
  businessPictures: [{ type: String }], // Array of image URLs
  nidFile: { type: String },
  tinFile: { type: String },
  taxFile: { type: String },
  tradeLicenseFile: { type: String },
  bankStatementFile: { type: String },
  securityFile: { type: String },
  financialFile: { type: String },
  projectedROI: { type: String, required: true },
  returndate: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  userId: {
    type: String, // or type: mongoose.Schema.Types.ObjectId if you're referencing a User model
    required: true
  },
}, { timestamps: true });

const PendingPost = mongoose.model('PendingPost', pendingPostSchema);
export default PendingPost;