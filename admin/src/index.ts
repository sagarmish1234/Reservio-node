import express from 'express';
import { authenticateToken } from './middleware/Authentication';
import HotelController from './controller/HotelController';
import RoomController from './controller/RoomController';
import DiscountController from './controller/DiscountController';
import VoucherController from './controller/VoucherController';
import CancellationDetailController from './controller/CancellationDetailController';

const app = express();
require('dotenv').config();
app.use(express.json());

app.use('/api', authenticateToken);
app.use('/api/hotel', HotelController);
app.use('/api/room', RoomController);
app.use('/api/discount', DiscountController);
app.use('/api/voucher', VoucherController);
app.use('/api/cancellationDetail', CancellationDetailController);

const PORT = process.env.PORT ? process.env.PORT : 3001;

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
