const { buildSchema } = require('graphql');
const userSchema = require('./schemas/user');
const recommendationSchema = require('./schemas/recommendation');
const itemSchema = require('./schemas/items')
const followSchema = require('./schemas/follow')

module.exports = buildSchema(`
${userSchema.User}
${userSchema.Authpayload}
${recommendationSchema.Recommendations}
${itemSchema.Items}
${followSchema.Follows}

type RootQuery {
    ${userSchema.UserQueries}
    ${recommendationSchema.RecommendationQueries}
    ${itemSchema.ItemsQueries}
    ${followSchema.FollowsQueries}
    
}

type RootMutation{
    ${userSchema.UserMutations}
    ${recommendationSchema.RecommendationMutation}
    ${itemSchema.ItemsMutation}
    ${followSchema.FollowMutation}
    
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`);
