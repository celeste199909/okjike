const KoaRouter = require("koa-router")
const { Sequelize, DataTypes } = require('sequelize');

const router = new KoaRouter()

const sequelize = new Sequelize('okjike_dev', 'root', 'mysql1099', {
    host: 'localhost',
    dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
  });

//   (async function(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
//   })()

  const User = sequelize.define("user", {
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
  });



router.get("/", ctx => {
    ctx.body = "hello"
})

router.post("/login", async (ctx) => {

    let data = ctx.request.body;
    let res = await User.findOne({
        where: {
            username: data.username,
            password: data.password
        }
    })

    if(res === null){
        ctx.body = "登录失败"
        return;
    }

    ctx.body = "登录成功"

})

router.post("/register", async (ctx) => {

    let data = ctx.request.body;
    // 验证数据库中是否已有该用户

    let res = await User.findOne({
        where: {username: data.username}
    })

    if(res){
        ctx.body = "用户名已存在"
        return;
    }

    let user = User.build(data)
    await user.save()
    ctx.body = "注册成功"

})

module.exports = router