const crypto = require('crypto');

module.exports = function validateSignature(query) {

  var parameters = [];
  for (var key in query) {
    if (key != 'signature') {
      parameters.push(key + '=' + query[key])
    }
  }
  var message = parameters.sort().join('');
  var digest = crypto.createHmac('sha256', process.env.SHOPIFY_API_SECRET).update(message).digest('hex');
  return digest === query.signature
}
