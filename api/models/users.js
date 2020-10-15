const { Sequelize } = require('sequelize');
const db = require("./aa_connection")

  const users = db.define("users", {
    username: Sequelize.TEXT,
    password: Sequelize.TEXT,
    slogan: Sequelize.TEXT,
  });

// users.sync({force: true})

// let data = [
//   {
//     username: "hgw",
//     password: "123",
//     slogan: "让世界更美好1"
//   },
//   {
//     username: "abc",
//     password: "123",
//     slogan: "让世界更美好2"
//   },
//   {
//     username: "zhangsan",
//     password: "123",
//     slogan: "让世界更美好3"
//   },
//   {
//     username: "lisi",
//     password: "123",
//     slogan: "让世界更美好4"
//   },
//   {
//     username: "wangwu",
//     password: "123",
//     slogan: "让世界更美好5"
//   }
// ]

// data.map( async (item) => {
//   let user = users.build(item);
//   await user.save()
// })

module.exports = users