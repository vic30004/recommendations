const userResolver = require('./resolvers/user');
const recommendationResolver = require('./resolvers/recommendation');
const itemResolver = require('./resolvers/items')
module.exports = {
  ...userResolver,
  ...recommendationResolver,
  ...itemResolver,
};
