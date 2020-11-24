const db = require('../../knexfile');

exports.User = `
type User{
    id: ID!
    username: String!
    email: String!
    password: String!
}
type Token{
    token: String
    
}
`;

exports.UserQueries = `
    user(id:Int!):[User]
    users:[User]
    token: Token
`;

exports.UserMutations = `
    addUser(username:String!,email:String!,password:String!): [User]
    loginUser(username:String!, password:String!): Token
`;
