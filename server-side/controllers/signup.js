import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

async function createUser(req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        const { name, email, password,role } = req.body;

        // Await bcrypt.hash to handle the promise
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default { createUser };
