const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // DB 설정 가져오기

const User = sequelize.define("User", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
});

module.exports = User;
