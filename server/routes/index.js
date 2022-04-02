const combineRouters = require('koa-combine-routers');

const proxyRoutes = require("./proxy-routes");
const postRoutes = require("./post-routes")
const registerRoutes = require("./register-routes")

const combinedRoutes = combineRouters(
  proxyRoutes,
  postRoutes,
  registerRoutes
)

module.exports = combinedRoutes