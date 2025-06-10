import { Router } from 'express';
import { getNameOptions, getNamesByType } from '../controllers/namesController';

const router = Router();

// Get all available name types
router.get('/options', getNameOptions);

// Get names for a specific group
router.get('/group/:type', getNamesByType);

export default router; 