import React, { Fragment, useEffect } from "react";
import {
  GET_USER,
  SHOWFOLLOWERS,
  GET_RECOMMENDATIONS,
  FOLLOW,
} from "../../graphql/";
import { useQuery, useMutation } from "@apollo/client";
import { ContentContainer, ContentSection } from "../../styles/Recommendations";
import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";

const RecomendationContentItems = ({
  title,
  id,
  category,
  description,
  follow,
  recommendation_id,
  user,
}) => {
  const [
    followRecommendation,
    { loading: muationLoading, error: mutationError },
  ] = useMutation(FOLLOW, {
    refetchQueries: [
      { query: GET_RECOMMENDATIONS },
      { query: SHOWFOLLOWERS, variables: { recommendation_id } },
    ],
    onError(err) {
      console.log(err);
    },
  });
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id },
  });
  const [following, setFollowing, toggle] = useToggle();

  const {
    data: followers,
    loading: followersLoading,
    error: followersError,
  } = useQuery(SHOWFOLLOWERS, {
    variables: { recommendation_id },
    onError(err) {
      console.log(err);
    },
  });

  const filterFollowers = (arr) => {
    const userId = user.loadUser[0].id;
    if (!arr) return;
    if (arr.showFollowesForRecommendation.length === 0) return;
    const res = arr.showFollowesForRecommendation.filter(
      (user) => user.user_id === userId
    );
    if (res.length > 0) {
      return setFollowing(res.length > 0);
    }
  };

  const limitText = (text, num) => {
    let temp = text.split(" ");
    if (temp.length > num) {
      return `${temp.slice(0, num).join(" ")} ... Read More`;
    }
    return text;
  };

  useEffect(() => {
    if (!followersLoading && followers) {
      filterFollowers(followers);
    }
  }, [followersLoading, muationLoading]);

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
              <h5>
                Follows: {follow < 0 ? 0 : follow}
                <i
                  onClick={() =>
                    followRecommendation({ variables: { recommendation_id } })
                  }
                  class='fas fa-heart'
                  style={following ? { color: "red" } : { color: "black" }}
                ></i>
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
