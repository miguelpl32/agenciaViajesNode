import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: "./variables.env" });

const db = new Sequelize(
  
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 80000,
      idle: 50000,
    },
    operatorAliases: false,
  }
);

export default db;


