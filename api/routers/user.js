const KoaRouter = require("koa-router")
const users = require("../models/users")

const router = new KoaRouter()

router.get("/", ctx => {
    ctx.body = "hello"
})

router.post("/login", async (ctx) => {

    let data = ctx.request.body;
    let res = await users.findOne({
        where: {
            username: data.username,
            password: data.password
        }
    })

    if(res === null){
        ctx.body = "登录失败"
        return;
    }

    ctx.body = {
        id: res.id,
        username: res.username,
        nickname: res.nickname,
    }

})

router.post("/register", async (ctx) => {

    let data = ctx.request.body;
    // 验证数据库中是否已有该用户

    let res = await users.findOne({
        where: {username: data.username}
    })

    if(res){
        ctx.body = "用户名已存在"
        return;
    }

    let user = users.build(data)
    await user.save()
    ctx.body = "注册成功"

})

module.exports = router