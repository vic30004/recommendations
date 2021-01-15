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
    if (data.length < 5) {
      return data;
    }
    const res = data.slice(0, 5);
    return res;
  };


  return (
    <UpdateContainerBuilder
      title={"Recent Recommendations"}
      data={returnFiveRecentRecommendation(data.recommendations)}
    />
  );
};
