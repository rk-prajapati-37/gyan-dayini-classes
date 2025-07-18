import { Router } from 'express';
import { login, register } from '../controllers/authController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

// Login route
router.post('/login', login);

// Registration routes
router.post('/register/student', register);
router.post('/register/parent', register);
router.post('/register/teacher', register);

// Protected routes example
router.get('/profile', authenticate, (req, res) => {
    res.json({ message: 'User profile data' });
});

export default router;