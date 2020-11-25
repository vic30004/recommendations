exports.Recommendations = `
type Recommendation{
    id: ID!
    title: String!
    category: String!
    description: String!
    follow:Int!
    user_id: Int!
}
`;

exports.RecommendationQueries = `
recommendations: [Recommendation]

`;