import { createHotel } from '../service/HotelService';
import { Router } from 'express';

const router = Router();

router.post('/createhotel', async (req, res) => {
  try {
    const payload = req.body;
    const response = await createHotel(payload);
    return res.json(response);
  } catch (err:any) {
    return res.status(400).json({ message: err.message });
  }
});

export default router;
