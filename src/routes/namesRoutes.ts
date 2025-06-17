import { Router } from 'express';
import { getNameOptions, getNamesByType, getRandomNames } from '../controllers/namesController';

const router = Router();

router.get('/options', getNameOptions);

router.get('/group/:type', getNamesByType);

router.get('/random', getRandomNames);

export default router; 