import { gql, useQuery } from "@apollo/client";

const GET_RECOMMENDATIONS = gql`
  {
    recommendations {
      title
    }
  }
`;