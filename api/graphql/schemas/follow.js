exports.Follows = `
type Follow{
    id: ID
    user_id: ID
    recommendation_id:ID
    title:String
    description:String
    category:String
    main_picture:String
    owner: ID

}
`;

exports.FollowsQueries = `
myFollows: [Follow]
showFollowesForRecommendation(recommendation_id:ID!):[Follow]
getFollowsByUserId(user_id: ID!):[Follow]
    
`;

exports.FollowMutation = `
makeFollwo(recommendation_id:ID!):[Follow]
`;
