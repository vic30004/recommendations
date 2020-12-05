exports.Recommendations = `


type Recommendation{
    id: ID!
    title: String!
    category: String!
    description: String!
    main_picture: String
    follow:Int!
    user_id: Int!
}

type RecommendationWithUser{
    recommendation: Recommendation
    user: User
}
`;

exports.RecommendationQueries = `
recommendations: [Recommendation]

`;

exports.RecommendationMutation = `
addRecommendations( title:String!, description:String!, category:String!, main_picture:String!): RecommendationWithUser
recommendationFilter(title:String, category:String,user_id:ID):[Recommendation]
editRecommendation(id:ID!, title:String, category:String, description:String, main_picture:String):[Recommendation]
`;
