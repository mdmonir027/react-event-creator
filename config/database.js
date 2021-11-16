const { Sequelize } = require('sequelize');
const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
module.exports = db;
