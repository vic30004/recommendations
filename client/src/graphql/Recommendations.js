import { gql, useQuery } from "@apollo/client";

export const GET_RECOMMENDATIONS = gql`
  {
    recommendations {
      id
      title
      description
      category
      main_picture
      follow
      user_id
      created_at
    }
  }
`;

export const ADD_RECOMMENDATION = gql`
  mutation(
    $title: String!
    $category: String!
    $description: String!
    $main_picture: String!
  ) {
    addRecommendations(
      title: $title
      category: $category
      description: $description
      main_picture: $main_picture
    ) {
      recommendation {
        id
      }
      user {
        username
      }
    }
  }
`;

export const ADD_ITEMS = gql`
  mutation(
    $title: String!
    $description: String!
    $cover_picture: String!
    $recommendation_id: ID!
  ) {
    addItems(
      title: $title
      description: $description
      cover_picture: $cover_picture
      recommendation_id: $recommendation_id
    ) {
      id
      title
    }
  }
`;
