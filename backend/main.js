const Koa = require("koa2");
const KoaRouter = require("koa-router")
const bodyParser = require("koa-bodyparser")
const userRouter = require("./routers/user.js")
const articleRouter = require("./routers/article.js")

const app = new Koa()

app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200; 
    } else {
      await next();
    }
  });

app.use(bodyParser())
app.use(userRouter.routes())
app.use(articleRouter.routes())

app.listen(9001, () => {
    console.log("http://localhost:9001")
})