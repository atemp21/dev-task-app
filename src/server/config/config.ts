import { Sequelize } from "sequelize";

const sequelize = new Sequelize('test', 'username', 'password', {dialect: 'sqlite', storage: 'test.db'});

export default sequelize;