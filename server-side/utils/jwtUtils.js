import jwt from 'jsonwebtoken';
import secretKey from '../config/jwtConfig.js';

function generateToken(user) {
    const payload = {
        _id: user.id, 
        email: user.email,
        role: user.role,
        name: user.name,
    };
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export default generateToken;