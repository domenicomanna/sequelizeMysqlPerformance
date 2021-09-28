import { Sequelize } from "sequelize";
import { Book } from "./book";

export const createSequelizeInstance = async () => {
  const sequelize = new Sequelize({
    username: process.env.MYSQL_DB_USERNAME,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_DB_HOST,
    dialect: "mysql",
    pool: {
      min: 0,
      max: 10,
    },
  });

  Book.init(Book.definition, { sequelize, timestamps: false });

  return sequelize;
};
