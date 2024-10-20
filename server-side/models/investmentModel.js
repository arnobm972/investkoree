import mongoose from 'mongoose';

const investmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['active', 'completed'], default: 'active' },
  location: { type: String, required: true },
  funded: { type: String, required: true },
  left_for_fund: { type: String, required: true },
  raised: { type: Number, required: true },
  sector: { type: String, required: true },
  project_pic: { type: String, required: true },
  required_funding: { type: Number, required: true },
}, { timestamps: true });

const Investments = mongoose.model('Investments', investmentSchema);
export default Investments;