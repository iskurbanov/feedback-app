import Router from "koa-router";
const router = new Router();


router.post("/api/post", async (ctx) => {

  console.log(ctx.request.body)
  ctx.response.status = 200
  ctx.body = "hello"
})

module.exports = router