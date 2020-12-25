exports.Recommendations = `


type Recommendation{
    id: ID!
    title: String!
    category: String!
    description: String!
    main_picture: String
    follow:Int!
    user_id: Int!
    created_at:String
}

type RecommendationWithUser{
    recommendation: Recommendation
    user: User
}

type Message{
    message:String!
}
`;

exports.RecommendationQueries = `
recommendations: [Recommendation]
recommendationFilter(title:String, category:String,user_id:ID):[Recommendation]

`;

exports.RecommendationMutation = `
addRecommendations( title:String!, description:String!, category:String!, main_picture:String!): RecommendationWithUser
editRecommendation(id:ID!, title:String, category:String, description:String, main_picture:String):[Recommendation]
deleteRecommendation(id:ID!):Message
`;
