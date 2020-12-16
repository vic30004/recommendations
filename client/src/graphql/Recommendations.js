import { gql, useQuery } from "@apollo/client";

export const GET_RECOMMENDATIONS = gql`
  {
    recommendations {
      id
      title
      description
      category
      main_picture
    }
  }
`;