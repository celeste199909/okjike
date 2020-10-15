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

// let data = [
//   {
//     userid: "1",
//     username: "hgw",
//     slogan: "让世界更美好1",
//     content: "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
//     group: "宋词"
//   },
//   {
//     userid: "2",
//     username: "abc",
//     slogan: "让世界更美好2",
//     content: "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
//     group: "宋词"
//   },
//   {
//     userid: "3",
//     username: "zhangsan",
//     slogan: "让世界更美好3",
//     content: "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
//     group: "宋词"
//   },
//   {
//     userid: "4",
//     username: "lisi",
//     slogan: "让世界更美好4",
//     content: "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
//     group: "宋词"
//   },
//   {
//     userid: "5",
//     username: "wangwu",
//     slogan: "让世界更美好5",
//     content: "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
//     group: "宋词"
//   },
  
// ]

// data.map( async (item) => {
//   let article = articles.build(item);
//   await article.save()
// })

module.exports = articles