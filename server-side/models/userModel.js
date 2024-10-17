import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['founder', 'investor', 'admin'],
    default: 'founder', 
  },
}, {
  timestamps: true,
});



UserSchema.pre('save',async function (next) {
  if (typeof this.password !== 'string') {
    this.password = String(this.password);
  }
  
  if (!this.isModified('password')){
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password =await bcrypt.hash(this.password,salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword,this.password);
  
}

const User = mongoose.model('User', UserSchema);
export default User;