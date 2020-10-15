const KoaRouter = require("koa-router")
const articles = require("../models/articles")
const follows = require("../models/follows")

const router = new KoaRouter()

// 添加一条动态
router.post("/publishArticle", async (ctx) => {

    let data = ctx.request.body;

    console.log(data);

    let article = articles.build(data)
    await article.save()

    ctx.body = {
        code: 200,
        status: "发表成功",
        data: data
    };
})

// 获取我的所有动态
router.get("/allMyArticles", async (ctx) => {
    
    let data = ctx.request.query;
    let userid = Number(data.userid);
    console.log(typeof data.userid)

    let allMyArticles = await articles.findAll({
        where: {
            userid: userid
        }
    })

    console.log(allMyArticles)

    ctx.body = {
        code: 200,
        msg: "成功获取自己所有动态",
        data: allMyArticles
    }
})

// 获取所有动态

router.get("/allArticles", async (ctx) => {

    let allArticles = await articles.findAll();

    ctx.body = {
        code: 200,
        msg: "成功获取所有动态",
        data: allArticles
    }

})

// 只获取自己关注的人的动态

router.get("/myFollowingArticles", async(ctx) => {

    let data = ctx.request.query;
    // console.log(data.userid)

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

    let myFollowingArticles = await articles.findAll({
        where: {
            id: MyFollowingUserid
        }
    })

    ctx.body = {
        code: 200,
        status: "成功获取所有的关注的人的动态",
        data: myFollowingArticles
    }

})


// 获取最近十条动态



module.exports = router