import { createDiscount } from '../service/DiscountService';

const router = require('express').Router();

router.post('/createDiscount', async (req: any, res: any) => {
  try {
    const payload = req.body;
    const response = await createDiscount(payload);
    return res.json(response);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
});

export default router;
