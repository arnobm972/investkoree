import jwt from 'jsonwebtoken'
import secretkey from '../config/jwtConfig.js'

function generateToken(user){
    const payload={
        id:user_id,
        email:user.email,
        role:user.role
    }
    return jwt.sign(payload,secretkey,{expiresIn:"1h"});
};

export default generateToken;