const { Sequelize } = require("sequelize");
const { development } = require("./config.json");

const connectDB = async () => {
  const sequelize = new Sequelize(
    development.database,
    development.username,
    development.password,
    {
      host: development.host,
      dialect: "mysql",
    }
  );
  try {
    await sequelize.authenticate();
    console.log("Kết nối thành công đến cơ sở dữ liệu.");
  } catch (error) {
    console.error("Không thể kết nối đến cơ sở dữ liệu:", error.message);
  }
};

module.exports = connectDB;
