const { Sequelize } = require('sequelize');
const db = require("./aa_connection")

  const follows = db.define("follows", {
    userid: Sequelize.TEXT,
    following: Sequelize.TEXT,
  });

// follows.sync({force: true})

// let data = [
//   {
//     userid: "1",
//     following: "2"
//   },
//   {
//     userid: "1",
//     following: "3"
//   },
//   {
//     userid: "1",
//     following: "4"
//   },
//   {
//     userid: "1",
//     following: "5"
//   },
//   {
//     userid: "2",
//     following: "1"
//   },
//   {
//     userid: "2",
//     following: "5"
//   },
//   {
//     userid: "3",
//     following: "1"
//   },
//   {
//     userid: "4",
//     following: "2"
//   },
//   {
//     userid: "4",
//     following: "5"
//   },
//   {
//     userid: "5",
//     following: "4"
//   },
// ]

// data.map( async (item) => {
//   let follow = follows.build(item);
//   await follow.save()
// })

module.exports = follows