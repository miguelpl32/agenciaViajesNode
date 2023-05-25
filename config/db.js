import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: "./variables.env" });

var BD_NAME;
var BD_USER;
var BD_PASSWORD;


const db = new Sequelize(
  BD_NAME= 'railway',
  BD_USER= 'root',
  BD_PASSWORD='Lhilj41QcLP2FTsZeNh6',
  {
    host:'containers-us-west-71.railway.app',
    dialect: 'mysql',
    port: 7113,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 1,
      acquire: 80000,
      idle: 50000,
    },
    operatorAliases: false,
  }
);

export default db;


