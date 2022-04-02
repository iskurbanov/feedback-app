import Router from "koa-router"
const router = new Router({ prefix: '/proxy' })
import validateSignature from "../middleware/validateSignature";


router.post("/", async (ctx) => {

  const { query } = ctx
  const shopDomain = query.shop
  const signature = query.signature

  

  const valid = await validateSignature(query)

  console.log(valid)
  ctx.body = "Approved"
  ctx.response.status = 200
})

module.exports = router