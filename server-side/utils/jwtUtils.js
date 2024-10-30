import jwt from 'jsonwebtoken'
import secretkey from '../config/jwtConfig.js'

function generateToken(user){
    const payload={
        id:user._id,
        email:user.email,
        role:user.role,
        name :user.name,
    }
    return jwt.sign(payload,secretkey,{expiresIn:"1h"});
};

export default generateToken;