const Koa = require("koa2");
const KoaRouter = require("koa-router")
const bodyParser = require("koa-bodyparser")

const app = new Koa()
const router = new KoaRouter()

router.get("/", ctx => {
    ctx.body = "hello"
})

router.post("/login", async (ctx) => {

    console.log(ctx.request.body)
    ctx.body = "login test"

})

router.post("/register", async (ctx) => {

    console.log(ctx.request.body)
    ctx.body = "register test"

})

app.use(bodyParser())
app.use(router.routes())

app.listen(9000, () => {
    console.log("http://localhost:9000")
})