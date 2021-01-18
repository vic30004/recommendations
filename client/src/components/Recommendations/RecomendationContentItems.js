import React, { Fragment } from "react";
import { GET_USER } from "../../graphql/";
import { useQuery } from "@apollo/client";
import { ContentContainer, ContentSection } from "../../styles/Recommendations";

const RecomendationContentItems = ({
  title,
  id,
  category,
  description,
  follow,
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
              <h5>Follows: {follow}</h5>
            </ContentContainer>
            <p>{limitText(description, 20)}</p>
          </Fragment>
        )}
      </ContentSection>
    </Fragment>
  );
};

export default RecomendationContentItems;
