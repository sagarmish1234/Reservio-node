import { Router } from 'express';
import { createReservation } from '../service/ReservationService';
const router = Router();

router.post('/createReservation', async (req, res) => {
  try {
    const payload = req.body;
    const response = await createReservation(payload);
    return res.json(response);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
});

export default router;
