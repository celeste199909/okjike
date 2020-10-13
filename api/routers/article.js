const KoaRouter = require("koa-router")
const articles = require("../models/articles")

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

module.exports = router