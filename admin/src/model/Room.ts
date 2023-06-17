import { DataTypes } from 'sequelize';
import sequelize from '../config/db';
import Hotel from './Hotel';

const Room = sequelize.define('Room', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
Room.belongsTo(Hotel);

export default Room;
