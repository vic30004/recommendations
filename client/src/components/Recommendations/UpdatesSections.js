import React from "react";
import { GET_RECOMMENDATIONS } from "../../graphql/";
import { UpdateContainerBuilder } from "../../common/UpdateContainerBuilder";
import { UpdatesContainer } from "../../styles/Recommendations";
import { useQuery } from "@apollo/client";

export const UpdatesSections = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_RECOMMENDATIONS);

  if (loading) return "Loading...";

  if (error) return "Error";

  const returnFiveRecentRecommendation = (data) => {
    console.log(data);
    if (data.length < 5) {
      return data;
    }
    const res = data.reducer((acc, curr) => {
      while (acc.length !== 5) {
        acc.push(curr);
      }
    }, []);
    return res;
  };

  console.log(returnFiveRecentRecommendation(data.recommendations));

  return <UpdateContainerBuilder title={"Recent Recommendations"} data={data.recommendations}/>;
};
