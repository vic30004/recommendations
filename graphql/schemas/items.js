exports.Items =`
type Items{
    id:ID
    title:String
    description:String
    cover_picture:String
    user_id:ID
    recommendation_id: ID
}
`

exports.ItemsQueries = `
showItems(recommendation_id:Int): [Items]
`

exports.ItemsMutation=`
addItems(title:String!, description:String!, cover_picture:String, recommendation_id:ID!):[Items]
editItems(id:ID!, title:String, description:String, cover_picture:String, recommendation_id:ID!):[Items]
`