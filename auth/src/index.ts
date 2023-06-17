import express from 'express';
import UserRouter from './controller/UserController';
const app = express();
app.use(express.json());

app.use('/api/auth', UserRouter);

const PORT = process.env.PORT ? process.env.PORT : 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
