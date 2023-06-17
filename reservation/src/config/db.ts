import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
if (process.env.DB_URI === undefined)
  throw Error('DB_URI not present');
const sequelize = new Sequelize(process.env.DB_URI, {
  logging: false,
});
async function doIT() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
doIT();

sequelize.sync({ alter: true });

export default sequelize
