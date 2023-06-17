import { DataTypes } from 'sequelize';
import sequelize from '../config/db';
import Room from './Room';
import Hotel from './Hotel';
import Voucher from './Voucher';
import Discount from './Discount';

const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  bookingNo: {
    type: DataTypes.UUID,
    unique: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  checkInDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkOutDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isCheckInDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  reaservationPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Reservation.belongsToMany(Room, {
  through: 'RoomReservations',
});
Room.belongsToMany(Reservation, {
  through: 'RoomReservations',
});
Reservation.hasOne(Hotel);
Reservation.hasOne(Voucher);
Reservation.hasOne(Discount);

export default Reservation;
