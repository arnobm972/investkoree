// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Keep the password field for your authentication
  firebaseUID: { type: String, unique: true }, // Add a Firebase UID field
  role: { type: String, required: true, enum: ['investor', 'founder', 'admin'] },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
