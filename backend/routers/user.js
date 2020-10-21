const KoaRouter = require("koa-router")
const users = require("../models/users")
const follows = require("../models/follows")
const articles = require("../models/articles")

var Sequelize = require('sequelize');
var Op = Sequelize.Op;

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

    if (res === null) {
        ctx.body = "登录失败"
        return;
    }

    ctx.body = {
        code: 200,
        status: "登录成功",
        data: res
    }

})

router.post("/register", async (ctx) => {

    let data = ctx.request.body;
    // 验证数据库中是否已有该用户

    let res = await users.findOne({
        where: { username: data.username }
    })

    if (res) {
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

    res.forEach(async item => {
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
})

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

    res.forEach(async item => {
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
})

// 获取一个用户的信息

router.get("/user/:id", async ctx => {
    let userid = ctx.params.id

    let userInfo = await users.findOne({
        where: {
            id: userid
        }
    })

    // console.log(aUser);
    // aUser = JSON.parse(aUser)
    delete userInfo.dataValues.password
    userInfo.tags = JSON.parse(userInfo.tags)
    // console.log(aUser.tags);

    let aUserArticles = await articles.findAll({
        where: {
            userid: userid
        }
    })
    console.log(aUserArticles);
    aUserArticles.forEach(item => {
        item.thumbsup = JSON.parse(item.thumbsup)
        item.comment = JSON.parse(item.comment)
        item.collection = JSON.parse(item.collection)
    })
    console.log(aUserArticles);
    ctx.body = {
        code: 200,
        status: "获取用户详情成功",
        data: {
            userInfo: userInfo,
            aUserArticles: aUserArticles
        }
    }
})

// 推荐用户，根据标签推荐用户

router.post("/recommendatoryUsers", async (ctx) => {
    let data = ctx.request.body;
    // data = JSON.parse(data)
    // console.log(data);
    // let tags = data.tags
    // tagsArr = tags.split(" ")
    // console.log(tagsArr)
    let tag = data[0]

    let recommendatoryUsers = await users.findAll({
        where: {
            tags: {
                [Op.like]: `%${tag}%`
            },
        },
    })
    // console.log(recommendatoryUsers);
    // recommendatoryUsers = recommendatoryUsers.dataValues 
    recommendatoryUsers.forEach(item => {
        item.dataValues.tags = JSON.parse(item.dataValues.tags)
    })

    // recommendatoryUsers.tags = JSON.parse(recommendatoryUsers.tags)

    ctx.body = {
        code: 200,
        status: "成功获取推荐用户",
        data: recommendatoryUsers
    }
})
// 关注 和取消关注
router.post("/followUser", async ctx => {

    let data = ctx.request.body;

    let userid = data.userid;
    let following = data.following;

    console.log(data);

    let hasFollowed = await follows.findOne({
        where: {
            userid: userid,
            following: following
        }
    })

    if (hasFollowed) {


        let unfollow =  await follows.destroy({
            where: {
                userid: userid,
                following: following
            }
        })

        console.log(unfollow);
        ctx.body = {
            code: 200,
            status: "取消关注成功",
            data: data
        }
        return;
    }

    let follow = follows.build(data);
    await follow.save()

    ctx.body = {
        code: 200,
        status: "关注成功",
        data: data
    }
})

// 查看是否关注某个用户

router.post("/hasFollowed", async ctx => {
    let data = ctx.request.body;
    
    console.log(data)
    let res = await follows.findOne({
        where: {
            userid: data.userid,
            following: data.following
        }
    })
    
    let hasFollowed = Boolean(res)

    ctx.body = {
        code: 200,
        status: hasFollowed ? "已关注" : "未关注",
        data: hasFollowed
    }
})



module.exports = router