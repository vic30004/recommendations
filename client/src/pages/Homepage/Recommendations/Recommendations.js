import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_RECOMMENDATIONS = gql`
  {
    recommendations {
      title
    }
  }
`;

const Recommendations = () => {
  const { loading, error, data } = useQuery(GET_RECOMMENDATIONS);

  if (loading) return "loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  return <div>hello</div>;
};

export default Recommendations;
