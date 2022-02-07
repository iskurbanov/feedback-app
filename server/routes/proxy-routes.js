import Router from "koa-router";
const send = require('koa-send');

const router = new Router({ prefix: '/proxy' });


router.get("/", async (ctx) => {
  // const { shop, accessToken } = ACTIVE_SHOPIFY_SHOPS
  // const client = createClient(shop, accessToken)

  ctx.res.setHeader('Content-Type', 'application/liquid')
  await send(ctx, "client-storefront/build/index.html")
  ctx.res.statusCode = 200;
});


router.get('/static/css/:file', async (ctx) => {
  ctx.res.setHeader('Content-Type', 'text/css')
  await send(ctx, `client-storefront/build/static/css/${ctx.params.file}`)
});

router.get('/static/js/:file', async (ctx) => {
  ctx.res.setHeader('Content-Type', 'text/javascript')
  await send(ctx, `client-storefront/build/static/js/${ctx.params.file}`)
});

module.exports = router