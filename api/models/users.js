const { Sequelize } = require('sequelize');
const db = require("./aa_connection")

  const users = db.define("users", {
    username: Sequelize.TEXT,
    password: Sequelize.TEXT,
    nickname: Sequelize.TEXT,
  });

// users.sync({force: true})

module.exports = users