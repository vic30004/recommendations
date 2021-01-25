import React, { Fragment } from "react";
import { GET_USER } from "../../graphql/";
import { useQuery } from "@apollo/client";
import { ContentContainer, ContentSection } from "../../styles/Recommendations";
import { Link } from "react-router-dom";

const RecomendationContentItems = ({
  title,
  id,
  category,
  description,
  follow,
  followRecommendation,
  recommendation_id,
}) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id },
  });

  const limitText = (text, num) => {
    let temp = text.split(" ");
    if (temp.length > num) {
      return `${temp.slice(0, num).join(" ")} ... Read More`;
    }
    return text;
  };
  return (
    <Fragment>
      <h1>{title}</h1>
      <ContentSection>
        {!loading && data.user && (
          <Fragment>
            <ContentContainer>
              <h5>
                {" "}
                <i class='fas fa-user'></i> {data.user.username}
              </h5>
              <h5>{category}</h5>
              <h5
                onClick={() =>
                  followRecommendation({ variables: { recommendation_id } })
                }
              >
                Follows: {follow}
              </h5>
            </ContentContainer>
            <p>
              {" "}
              <Link to={`/${data.user.username}/${recommendation_id}`}>
                {limitText(description, 20)}
              </Link>
            </p>
          </Fragment>
        )}
      </ContentSection>
    </Fragment>
  );
};

export default RecomendationContentItems;
