const { buildSchema } = require('graphql');
const userSchema = require('./schemas/user');
const recommendationSchema = require('./schemas/recommendation');

module.exports = buildSchema(`
${userSchema.User}
${userSchema.Authpayload}
${recommendationSchema.Recommendations}

type RootQuery {
    ${userSchema.UserQueries}
    ${recommendationSchema.RecommendationQueries}

}

type RootMutation{
    ${userSchema.UserMutations}
    ${recommendationSchema.RecommendationMutation}
    
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`);
