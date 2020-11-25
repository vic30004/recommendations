const userResolver = require('./resolvers/user');
const recommendationResolver = require('./resolvers/recommendation');
module.exports = {
  ...userResolver,
  ...recommendationResolver,
};
