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

export const GET_RECOMMENDATION_BY_ID = gql`
  query($id: ID!) {
    getRecommendationById(id: $id) {
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

export const FOLLOW = gql`
  mutation($recommendation_id: ID!) {
    makeFollwo(recommendation_id: $recommendation_id) {
      title
    }
  }
`;

export const SHOWFOLLOWERS = gql`
  query($recommendation_id: ID!) {
    showFollowesForRecommendation(recommendation_id: $recommendation_id) {
      user_id
    }
  }
`;

export const GET_FOLLOWS_BY_USER_ID = gql`
  query($user_id: ID!) {
    getFollowsByUserId(user_id: $user_id) {
      id
      recommendation_id
      title
      description
      category
      main_picture
      owner
    }
  }
`;
