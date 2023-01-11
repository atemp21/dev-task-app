import { Sequelize } from "sequelize";

const db = new Sequelize('test', 'username', 'password', {dialect: 'sqlite', storage: 'test.db'});

export default db;