import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query($recommendation_id: Int!) {
    showItems(recommendation_id: $recommendation_id) {
      id
      title
      description
      cover_picture
      user_id
      recommendation_id
    }
  }
`;

export const DELETE_ITEMS = gql`
  mutation($id: ID!, $recommendation_id: ID!) {
    deleteItem(id: $id, recommendation_id: $recommendation_id) {
      message
    }
  }
`;
