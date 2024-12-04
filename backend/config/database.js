const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // DB 서버 주소
    port: process.env.DB_PORT,
    dialect: "mysql", // 사용 DB 종류
  }
);

module.exports = sequelize;
