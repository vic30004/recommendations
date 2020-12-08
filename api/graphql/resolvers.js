const userResolver = require('./resolvers/user');
const recommendationResolver = require('./resolvers/recommendation');
const itemResolver = require('./resolvers/items')
const followResolver = require('./resolvers/follow')
module.exports = {
  ...userResolver,
  ...recommendationResolver,
  ...itemResolver,
  ...followResolver,
};
