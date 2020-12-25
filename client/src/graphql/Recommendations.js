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
        title
        category
        description
        main_picture
      }
      user {
        username
      }
    }
  }
`;
