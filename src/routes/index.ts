import { Router } from 'express';
import ImagesRouter from './Images';

const router = Router();

router.use('/images', ImagesRouter);

export default router;
