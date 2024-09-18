import express from "express";
import { signup, login } from '../controllers/authController.js';

const authRoutes = express.Router();

// Signup route
authRoutes.post('/signup', signup);

// Login route
authRoutes.post('/login', login);

export default authRoutes;
