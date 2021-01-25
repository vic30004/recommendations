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

export const EDIT_ITEM = gql`
  mutation(
    $id: ID!
    $title: String!
    $description: String!
    $cover_picture: String!
    $recommendation_id: ID!
  ) {
    editItems(
      id: $id
      title: $title
      description: $description
      cover_picture: $cover_picture
      recommendation_id: $recommendation_id
    ) {
      title
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
