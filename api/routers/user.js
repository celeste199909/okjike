const KoaRouter = require("koa-router")
const users = require("../models/users")
const follows = require("../models/follows")

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
        slogan: res.slogan
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


// 我关注的人

router.get("/allMyFollowing", async (ctx) => {
    let data = ctx.request.query;
    console.log(data.userid)

    let userid = data.userid;

    let res = await follows.findAll({
        where: {
            userid: userid
        }
    })
    
    // 定义一个数组来保存id（我关注的人的id）
    let MyFollowingUserid = []

     res.forEach( async item => {
            // 把id push 到数组中去
            MyFollowingUserid.push(item.dataValues.following);
        })
    
    // 查询的时候传入id数组
    let allMyFollowing = await users.findAll({
        where: {
            id: MyFollowingUserid
        }
    })

    ctx.body = {
        code: 200,
        status: "成功请求所有我关注的人",
        data: allMyFollowing
    }
} )

// 关注我的人

router.get("/allMyFollower", async (ctx) => {
    let data = ctx.request.query;
    // console.log(data.userid)
    let userid = data.userid;

    let res = await follows.findAll({
        where: {
            following: userid
        }
    })

    console.log(res)
    
    // 定义一个数组来保存id(关注我的人的id)
    let MyFollowerUserid = []

     res.forEach( async item => {
            // 把id push 到数组中去
            MyFollowerUserid.push(item.dataValues.userid);
        })
    
    // // 查询的时候传入id数组
    let allMyFollower = await users.findAll({
        where: {
            id: MyFollowerUserid
        }
    })

    ctx.body = {
        code: 200,
        status: "成功请求所有我关注的人",
        data: allMyFollower
    }
} )

module.exports = router