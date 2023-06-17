"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Authentication_1 = require("./middleware/Authentication");
const app = (0, express_1.default)();
require('dotenv').config();
app.use(express_1.default.json());
app.use('/api', Authentication_1.authenticateToken);
app.use('/api/hotel', require('./controller/HotelController'));
app.use('/api/room', require('./controller/RoomController'));
app.use('/api/discount', require('./controller/DiscountController'));
app.use('/api/voucher', require('./controller/VoucherController'));
app.use('/api/cancellationDetail', require('./controller/CancellationDetailController'));
const PORT = process.env.PORT ? process.env.PORT : 3001;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
