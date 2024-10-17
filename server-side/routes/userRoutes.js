import express from 'express';
const router = express.Router();
import {protect} from '../middleware/authMiddleware.js'
import { authUser,registerUser,logoutUser } from '../controllers/userController.js';


router.post('/auth',authUser);

router.post('/register',registerUser);

router.post('/logout',logoutUser);

export default router;