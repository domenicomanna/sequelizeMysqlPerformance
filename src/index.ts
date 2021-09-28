import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mysql from "mysql2/promise";
import { createSequelizeInstance } from "./database";
import { Book } from "./database/book";

const app = express();
const port = 3000;

const startServer = async () => {
  const sequelizeInstance = await createSequelizeInstance();
  const mysqlPool = mysql.createPool({ 
    user: process.env.MYSQL_DB_USERNAME,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  app.get("/helloWorld", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/longQueryWithSequelize", async (req, res) => {
    await Book.findAll( {limit: 200000} );
    res.send("Sequelize query completed");
  });

  app.get("/longQueryWithRawMysql", async (req, res) => {
    const [rows, fields] = await mysqlPool.execute("SELECT * from Books limit 200000");
    res.send("Raw books query completed");
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

startServer();
