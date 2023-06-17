import express from 'express';
import dotenv from 'dotenv';
import ReservationController from './controller/ReservationController';
const app = express();

dotenv.config();

app.use(express.json());

app.use('/api/reservation', ReservationController);

const PORT = process.env.PORT ? process.env.PORT : 3002;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
