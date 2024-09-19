import express from 'express';
import { upload, uploadFile } from '../controllers/uploadController.js';

const uploadRoutes = express.Router();

uploadRoutes.post('/upload', upload.single('file'), uploadFile); // Handle single file upload

export default uploadRoutes;
