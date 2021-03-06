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
import useToggle from "../hooks/useToggle";
import Modal from "../common/Modal";
import { SignUpText } from "../common";

const RecomendationContentItems = ({
  title,
  id,
  category,
  description,
  follow,
  recommendation_id,
  user,
}) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id },
  });
  const [following, setFollowing] = useToggle();
  const [modal, setModal, toggle] = useToggle();
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

  const filterFollowers = (arr) => {
    const userId = user ? user.loadUser[0].id : 0;
    if (!arr) {
      return setFollowing(false);
    }
    if (arr.showFollowesForRecommendation.length < 1) {
      setFollowing(false);
    }
    const res = arr.showFollowesForRecommendation.filter(
      (user) => user.user_id === userId
    );
    if (res.length > 0) {
      return setFollowing(true);
    }
  };

  const limitText = (text, num) => {
    let temp = text.split(" ");
    if (temp.length > num) {
      return `${temp.slice(0, num).join(" ")} ... Read More`;
    }
    return text;
  };

  const handleLogoutFollowClick = (user, follow, recommendation_id) => {
    if (user) {
      return (
        <h5>
          Follows: {follow < 0 ? 0 : follow}
          <i
            onClick={() =>
              followRecommendation({ variables: { recommendation_id } })
            }
            class='fas fa-heart'
            style={following ? { color: "red" } : { color: "grey" }}
          ></i>
        </h5>
      );
    } else {
      return (
        <h5>
          Follows: {follow < 0 ? 0 : follow}
          <i
            onClick={() => toggle()}
            class='fas fa-heart'
            style={{ color: "grey" }}
          ></i>
        </h5>
      );
    }
  };

  useEffect(() => {
    if (user) {
      if (!followersLoading && followers) {
        filterFollowers(followers);
      }
    }
  }, [followers, muationLoading, user]);

  return (
    <Fragment>
      {modal ? <Modal>{SignUpText("follow", toggle)}</Modal> : ""}

      <Fragment>
        <h1>{title}</h1>
        <ContentSection>
          {data && (
            <Fragment>
              <ContentContainer>
                <h5>
                  {" "}
                  <i class='fas fa-user'></i>{" "}
                  <Link to={`/${data.user.username}`}>
                    {data.user.username}
                  </Link>
                </h5>
                <h5>{category}</h5>
                {handleLogoutFollowClick(user, follow, recommendation_id)}
              </ContentContainer>
              <p>
                {" "}
                <Link to={`/${recommendation_id}/${data.user.username}`}>
                  {limitText(description, 20)}
                </Link>
              </p>
            </Fragment>
          )}
        </ContentSection>
      </Fragment>
    </Fragment>
  );
};

export default RecomendationContentItems;
