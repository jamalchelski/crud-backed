import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "ista25", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
