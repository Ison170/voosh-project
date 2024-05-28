import express from 'express';
import { authenticate, authorizeAdmin } from '../middleware/auth.middleware.js';
import { updateUserDetails, uploadPhoto, getUserProfiles } from '../controllers/user.controller.js';
import uploadImage from '../utils/multer.util.js';

const router = express.Router();

router.use(authenticate);

router.put('/profile', updateUserDetails);
router.put('/profile/photo', uploadImage.single('photo'), uploadPhoto);
router.get('/profiles', getUserProfiles);

export default router;
