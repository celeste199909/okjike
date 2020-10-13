const { Sequelize } = require('sequelize');
const db = require("./aa_connection")

  const articles = db.define("articles", {
    userid: Sequelize.TEXT,
    username: Sequelize.TEXT,
    slogan: Sequelize.TEXT,
    content: Sequelize.TEXT,
    group: Sequelize.TEXT
  });

// articles.sync({force: true})

module.exports = articles