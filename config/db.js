import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: "./variables.env" });

const db = new Sequelize(
  process.env.BD_NOMBRE,
  process.env.BD_USER,
  process.env.BD_PASS,
  {
    host: process.env.HOST,
    
    port: process.env.PORT,
    dialect: 'mysql',
    
    define: {
      timestamps: false,
      freezeTableName: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 300000,
      idle: 100000,
    },
    operatorAliases: false,
  }
);

export default db;
