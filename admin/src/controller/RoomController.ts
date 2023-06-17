import { createRoom } from '../service/RoomService';
import { Router } from 'express';

const router = Router();

router.post('/createRoom', async (req, res) => {
  try {
    const payload = req.body;
    const response = await createRoom(payload);
    return res.json(response);
  } catch (err:any) {
    return res.status(400).json({ message: err.message });
  }
});

export default router
