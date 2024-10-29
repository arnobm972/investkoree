import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import generateToken from '../utils/jwtUtils.js'
import verifyToken from '../utils/authMiddleware.js'

async function login(email,password) {
    try {
        const existingUser=await User.findOne({email});
        if(!existingUser){
            throw new Error("User not Found");
        }
     const isPassvalid = await  bcrypt.compare(password,existingUser.password);
     if(!isPassvalid){
        throw new Error("Incorrect Password");
    }
    const token=generateToken(existingUser);
    } catch (error) {
        throw new Error("Invalid credentials");
    }
    
}
async function refreshToken(oldToken) {
    try {
        const decodedToken =verifyToken(oldToken);
        const user =User.findById(decodedToken._id);
        if(!user){
            throw new error("User not found");
        };
        const newToken =generateToken(user);
        return newToken;
    } catch (error) {
        throw new error("Invalid token");
    }
    }

    export default {login,refreshToken};