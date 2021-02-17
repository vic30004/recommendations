
exports.User = `
type User{
    id: ID!
    username: String!
    email: String!
    password: String!
}

`;
exports.Authpayload =`
type Authpayload{
    user: [User!]
    token: String!
    
}`

exports.UserQueries = `
    user(id:Int!):User
    users:[User]
    loadUser: [User]
    getUserByUsername(username:String!): [User]
`;

exports.UserMutations = `
    addUser(username:String!,email:String!,password:String!): [User]
    loginUser(username:String!, password:String!): Authpayload
`;
