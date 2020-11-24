const { buildSchema } = require('graphql');
const userSchema = require('./schemas/user');

module.exports = buildSchema(`
${userSchema.User}


type RootQuery {
    ${userSchema.UserQueries}
}

type RootMutation{
    ${userSchema.UserMutations}
    
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`);
