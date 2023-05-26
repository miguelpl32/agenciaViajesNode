import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: "./variables.env" });

const db = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.HOST,
    
    port: process.env.MYSQLPORT,
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
