import mongoose from 'mongoose';

const investmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['active', 'completed'], default: 'active' },
  location: { type: String, required: true }, // New field
  funded: { type: String, required: true }, // New field
  left_for_fund: { type: String, required: true }, // New field
  raised: { type: Number, required: true }, // New field
  sector: { type: String, required: true }, // New field
  project_pic: { type: String, required: true }, // New field
  required_funding: { type: Number, required: true }, // New field
}, { timestamps: true });

const Investments = mongoose.model('Investments', investmentSchema);
export default Investments;