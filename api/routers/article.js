const KoaRouter = require("koa-router")
const articles = require("../models/articles")

const router = new KoaRouter()

router.post("/publishArticle", async (ctx) => {

    let {articleData} = ctx.request.body;

    console.log(articleData);

    let article = articles.build(articleData)
    await article.save()

    ctx.body = {
        code: 200,
        status: "发表成功",
        data: articleData
    };
})

module.exports = router