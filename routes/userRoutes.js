import express from "express";
import { protect } from '../middlewares/authMiddleware.js';

const userRoutes = express.Router();

// Protected route
userRoutes.get('/profile', protect, (req, res) => {
    res.json({
        _id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        role: req.user.role
    });
});

export default userRoutes;
