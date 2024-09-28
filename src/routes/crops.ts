import express, { Request, Response, NextFunction } from 'express';
import Crop from '../models/Crop';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  Crop.findById(req.params.id)
    .then((crop) => {
      if (!crop) {
        return res.status(404).json({ message: 'Crop not found' });
      }
      res.json(crop);
    })
    .catch((error) => next(error));
});

export default router;
