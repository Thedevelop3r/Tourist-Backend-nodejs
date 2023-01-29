import Sequelize from "sequelize";
import dotenv from 'dotenv'
dotenv.config();

console.log("db name:", process.env.DB_NAME);

const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: `${process.env.HOST}`,
    dialect: `${process.env.DIALECT}`,
  }
);

export {
  sequelize,
  Sequelize,
};
