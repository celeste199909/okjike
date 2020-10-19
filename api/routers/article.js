const KoaRouter = require("koa-router")
// const { where } = require("sequelize/types")
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

    // 格式化
    allMyArticles.forEach(item => {
        // console.log(aArticleDetails)
        if (!item.dataValues.thumbsup) {
            item.dataValues.thumbsup = "[]";
        }
        if (!item.dataValues.comment) {
            item.dataValues.comment = "[]";
        }
        if (!item.dataValues.collection) {
            item.dataValues.collection = "[]";
        }
        item.dataValues.thumbsup = JSON.parse(item.dataValues.thumbsup)
        item.dataValues.comment = JSON.parse(item.dataValues.comment)
        item.dataValues.collection = JSON.parse(item.dataValues.collection)
    })
   

    ctx.body = {
        code: 200,
        msg: "成功获取自己所有动态",
        data: allMyArticles
    }
})

// 获取所有动态

router.get("/allArticles", async (ctx) => {

    let allArticles = await articles.findAll();
    console.log(allArticles);

    allArticles.forEach(item => {
        if (!item.thumbsup || !item.comment || !item.collection) {
            item.thumbsup = "[]"
            item.comment = "[]"
            item.collection = "[]"
        }
        item.thumbsup = JSON.parse(item.thumbsup)
        item.comment = JSON.parse(item.comment)
        item.collection = JSON.parse(item.collection)
    })

    ctx.body = {
        code: 200,
        msg: "成功获取所有动态",
        data: allArticles
    }

})

// 只获取自己关注的人的动态

router.get("/myFollowingArticles", async (ctx) => {

    let data = ctx.request.query;

    let userid = data.userid;
    // console.log(userid)

    let res = await follows.findAll({
        where: {
            userid: userid
        }
    })
    // console.log(res)

    // 定义一个数组来保存id（我关注的人的id）
    let MyFollowingUserid = []

    res.forEach(async item => {
        // 把id push 到数组中去
        MyFollowingUserid.push(item.dataValues.following);
    })
    // console.log(MyFollowingUserid)

    let myFollowingArticles = await articles.findAll({
        where: {
            userid: MyFollowingUserid
        }
    })

    // 格式化
    myFollowingArticles.forEach(item => {
        // console.log(aArticleDetails)
        if (!item.dataValues.thumbsup) {
            item.dataValues.thumbsup = "[]";
        }
        if (!item.dataValues.comment) {
            item.dataValues.comment = "[]";
        }
        if (!item.dataValues.collection) {
            item.dataValues.collection = "[]";
        }
        item.dataValues.thumbsup = JSON.parse(item.dataValues.thumbsup)
        item.dataValues.comment = JSON.parse(item.dataValues.comment)
        item.dataValues.collection = JSON.parse(item.dataValues.collection)
    })
    console.log(myFollowingArticles)

    ctx.body = {
        code: 200,
        status: "成功获取所有的关注的人的动态",
        data: myFollowingArticles
    }

})

// 获取一条动态的详情
router.get("/details/:id", async (ctx) => {

    // console.log(ctx.request.path)
    let articleId = ctx.request.path.split("/")[2]
    // console.log(articleId)


    let aArticleDetails = await articles.findOne({
        where: {
            id: articleId
        }
    })
    aArticleDetails = aArticleDetails.dataValues
    // console.log(aArticleDetails)
    if (!aArticleDetails.thumbsup) {
        aArticleDetails.thumbsup = "[]";
    }
    if (!aArticleDetails.comment) {
        aArticleDetails.comment = "[]";
    }
    if (!aArticleDetails.collection) {
        aArticleDetails.collection = "[]";
    }
    aArticleDetails.thumbsup = JSON.parse(aArticleDetails.thumbsup)
    aArticleDetails.comment = JSON.parse(aArticleDetails.comment)
    aArticleDetails.collection = JSON.parse(aArticleDetails.collection)
    // console.log(aArticleDetails)

    ctx.body = {
        code: 200,
        msg: "成功获取动态详情",
        data: aArticleDetails
    }
})

// 添加评论
router.post("/publishComment", async (ctx) => {
    let data = ctx.request.body;

    // 根据用户传过来的信息格式化生成要存储的格式
    let aComment = {
        userid: data.userid,
        username: data.username,
        slogan: data.slogan,
        content: data.content
    }

    // 获取文章id 
    let articleId = data.id;
    // 查找该文章
    let article = await articles.findOne({
        where: {
            id: articleId
        }
    })
    // 如果还没有任何评论则把原有评论变成一个数组
    if (!article.dataValues.comment) {
        article.dataValues.comment = "[]"
    }
    // 把原有评论变成数组
    let oldComments = JSON.parse(article.dataValues.comment);
    // 初始化一个空数组 把用户上传的评论push进去
    let tempComments = []
    tempComments.push(aComment)
    // 原数组（原有评论）和当前的评论合成一个数组
    let newComments = tempComments.concat(oldComments)
    newComments = JSON.stringify(newComments)
    // 保存到数据库中
    const result = await articles.update(
        {
            comment: newComments
        },
        {
            where: {
                id: articleId,
            }
        }
    )

    ctx.body = {
        code: 200,
        status: "成功发表评论",
        data: JSON.parse(newComments)
    }
})
// 点赞
router.post("/thumbsup", async ctx => {
    let data = ctx.request.body;

    let articleId = data.id;
    let userid = data.userid;

    let aThumbsup = {
        userid: userid
    }

    let article = await articles.findOne({
        where: {
            id: articleId
        }
    })
    // console.log(article);
    if (!article.dataValues.thumbsup) {
        article.dataValues.thumbsup = "[]"
    }

    let oldThumbsup = JSON.parse(article.dataValues.thumbsup);
    console.log(oldThumbsup);

    // 判断是否点过赞
    let hasThumbsup = false;
    oldThumbsup.forEach((item, index) => {
        if (item.userid && item.userid === userid) {
            // delete oldThumbsup[index];
            oldThumbsup.splice(index, 1)
            hasThumbsup = true;
        }
    })
    console.log(oldThumbsup);


    let tempThumbsup = [];
    // 已经点赞则不添加
    if (!hasThumbsup) {
        tempThumbsup.push(aThumbsup)
    }

    let newThumbsup = tempThumbsup.concat(oldThumbsup)

    newThumbsup = JSON.stringify(newThumbsup)

    const result = await articles.update(
        {
            thumbsup: newThumbsup,
        },
        {
            where: {
                id: articleId
            }
        })

    if (hasThumbsup) {
        ctx.body = {
            code: 200,
            status: "取消点赞成功",
            data: JSON.parse(newThumbsup)
        }
    } else {
        ctx.body = {
            code: 200,
            status: "点赞成功",
            data: JSON.parse(newThumbsup)
        }
    }

})

// 获取热门动态
router.get("/popularTrends", async ctx => {


    let allArticles = await articles.findAll()
    allArticles.forEach(item => {
        // console.log(item.dataValues);
        if (!item.dataValues.thumbsup) {
            item.dataValues.thumbsup = "[]";
        }
        if (!item.dataValues.comment) {
            item.dataValues.comment = "[]";
        }
        if (!item.dataValues.collection) {
            item.dataValues.collection = "[]";
        }
        item.dataValues.thumbsup = JSON.parse(item.dataValues.thumbsup)
        item.dataValues.comment = JSON.parse(item.dataValues.comment)
        item.dataValues.collection = JSON.parse(item.dataValues.collection)
    })

    allArticles.map(item => {
        let thumbsupCount = item.dataValues.thumbsup.length
        // console.log(thumbsupCount);
        return thumbsupCount;
    })
    ctx.body = {
        code: 200,
        status: "获取热门动态成功",
        data: allArticles
    }
})


// 获取最近十条动态



module.exports = router