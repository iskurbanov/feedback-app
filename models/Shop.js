const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShopSchema = new Schema({
  shopify_domain: String,
  accessToken: String,
  country_name: String
})

module.exports = mongoose.models.ShopSchema || mongoose.model('Shop', ShopSchema)