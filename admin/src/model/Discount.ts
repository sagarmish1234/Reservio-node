import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const Discount = sequelize.define('Discount', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  periodFrom: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  periodTo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 25,
    },
  },
});

export default Discount
