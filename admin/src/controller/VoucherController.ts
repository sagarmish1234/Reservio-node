import { createVoucher } from '../service/VoucherService';
import { Router } from 'express';
const router = Router();

router.post('/createVoucher', async (req, res) => {
  try {
    const payload = req.body;
    const response = await createVoucher(payload);
    return res.json(response);
  } catch (err:any) {
    return res.status(400).json({ message: err.message });
  }
});

export default router

