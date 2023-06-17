import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const CancellationDetail = sequelize.define('CancellationDetail', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  daysBefore: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default CancellationDetail;
