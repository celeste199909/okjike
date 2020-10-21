const { Sequelize } = require('sequelize');
const db = require("./aa_connection")

  const users = db.define("users", {
    username: Sequelize.TEXT,
    password: Sequelize.TEXT,
    slogan: Sequelize.TEXT,
    tags: Sequelize.TEXT
  });

// users.sync({force: true})

// let data = [
//   {
//     username: "hgw",
//     password: "123",
//     slogan: "让世界更美好1",
//     tags: '["男", "天秤座"]'
//   },
//   {
//     username: "abc",
//     password: "123",
//     slogan: "让世界更美好2",
//     tags: '["女", "水瓶座", "前端"]'

//   },
//   {
//     username: "zhangsan",
//     password: "123",
//     slogan: "让世界更美好3",
//     tags: '["游戏玩家", "水瓶座", "后端"]'

//   },
//   {
//     username: "lisi",
//     password: "123",
//     slogan: "让世界更美好4",
//     tags: '["游戏玩家", "产品经理"]'
//   },
//   {
//     username: "wangwu",
//     password: "123",
//     slogan: "让世界更美好5",
//     tags: '["男", "阿里巴巴"]'
//   }
// ]

// data.map( async (item) => {
//   let user = users.build(item);
//   await user.save()
// })

module.exports = users