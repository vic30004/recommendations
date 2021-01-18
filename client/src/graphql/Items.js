import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query($recommendation_id: Int!) {
    showItems(recommendation_id: $recommendation_id) {
      id
      title
      description
      cover_picture
    }
  }
`;
