"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Room_1 = __importDefault(require("./Room"));
const Hotel_1 = __importDefault(require("./Hotel"));
const Voucher_1 = __importDefault(require("./Voucher"));
const Discount_1 = __importDefault(require("./Discount"));
const Reservation = db_1.default.define('Reservation', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    bookingNo: {
        type: sequelize_1.DataTypes.UUID,
        unique: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    checkInDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    checkOutDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    isCheckInDone: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    reaservationPrice: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
});
Reservation.belongsToMany(Room_1.default, {
    through: 'RoomReservations',
});
Room_1.default.belongsToMany(Reservation, {
    through: 'RoomReservations',
});
Reservation.hasOne(Hotel_1.default);
Reservation.hasOne(Voucher_1.default);
Reservation.hasOne(Discount_1.default);
exports.default = Reservation;
