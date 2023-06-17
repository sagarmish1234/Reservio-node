import { createCancellationDetail } from '../service/CancellationDetailService';

import { Router } from 'express';

const router = Router();

router.post(
  '/createCancellationDetail',
  async (req: any, res: any) => {
    try {
      const payload = req.body;
      const response = await createCancellationDetail(payload);
      return res.json(response);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
);

export default router;
