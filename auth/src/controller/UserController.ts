import { createUser, signInUser } from '../service/UserService';

import { Router } from 'express';

const router = Router();

router.post('/createUser', async (req: any, res: any) => {
  try {
    const userPayload = req.body;
    const user = await createUser(userPayload);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/signIn', async (req: any, res: any) => {
  try {
    const payload = req.body;
    console.log(payload);
    const token = await signInUser(payload.email, payload.password);
    return res.json({ token: token });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
});

export default router;
