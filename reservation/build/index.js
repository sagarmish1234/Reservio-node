"use strict";
const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use('/api/reservation', require('./controller/ReservationController'));
const PORT = process.env.PORT ? process.env.PORT : 3002;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
