const { buildSchema } = require('graphql');
const userSchema = require('./schemas/user');
const recommendationSchema = require('./schemas/recommendation');
const itemSchema = require('./schemas/items')

module.exports = buildSchema(`
${userSchema.User}
${userSchema.Authpayload}
${recommendationSchema.Recommendations}
${itemSchema.Items}


type RootQuery {
    ${userSchema.UserQueries}
    ${recommendationSchema.RecommendationQueries}
    ${itemSchema.ItemsQueries}

}

type RootMutation{
    ${userSchema.UserMutations}
    ${recommendationSchema.RecommendationMutation}
    ${itemSchema.ItemsMutation}
    
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`);
