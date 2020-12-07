exports.Follows =`
type Follow{
    id: ID
    user_id: ID
    recommendation_id:ID
    title:String
    description:String
    category:String

}
`


exports.FollowsQueries = `
myFollows: [Follow]
showFollowesForRecommendation(recommendation_id:ID!):[Follow]
    
`

exports.FollowMutation= `
makeFollwo(recommendation_id:ID!):[Follow]
`