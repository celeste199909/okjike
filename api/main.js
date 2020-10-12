const Koa = require("koa2");
const KoaRouter = require("koa-router")
const bodyParser = require("koa-bodyparser")
const userRouter = require("./routers/user.js")

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())

app.listen(9001, () => {
    console.log("http://localhost:9001")
})