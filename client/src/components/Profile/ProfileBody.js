import { useState, useContext, Fragment } from "react";
import { useMutation } from "@apollo/client";


import UserContext from "../../context/User/UserContext";

// Import Swiper styles
import Cards from "../../common/Cards";
import { DELETE_RECOMMENDATION, EDIT_RECOMMENDATION } from "../../graphql";
import { ItemContentContainer } from "../../styles/Items";

const ProfileBody = ({ recommendations, follow, query, user_id }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const userContext = useContext(UserContext);

  const [
    deleteItem,
    { loading: deleteLoading, error: deleteError },
  ] = useMutation(DELETE_RECOMMENDATION, {
    refetchQueries: [{ query: query, variables: { user_id } }],

    onError(err) {
      console.log(err);
    },
  });

  const [editItem, { loading: editLoading, error: editError }] = useMutation(
    EDIT_RECOMMENDATION,
    {
      refetchQueries: [{ query: query, variables: { user_id } }],

      onError(err) {
        console.log(err);
      },
    }
  );

  const { user } = userContext;
  return (
    <Fragment>
      <h2>{follow ? "Following" : "Recommendations"}</h2>
      {recommendations.length ? (
        <ItemContentContainer>
          {recommendations.map((item) => (
            <Cards
              key={item.title}
              id={item.id}
              title={item.title}
              picture={item.main_picture}
              description={item.description}
              userId={item.user_id}
              recommendation_id={item.recommendation_id || item.id}
              user={user}
              deleteItem={deleteItem}
              editItem={editItem}
              editLoading={editLoading}
            />
          ))}
        </ItemContentContainer>
      ) : follow ? (
        <ItemContentContainer>
          <h3>Not Following anything</h3>
        </ItemContentContainer>
      ) : (
        <ItemContentContainer>
          <h3>No Recommendations Yet</h3>
        </ItemContentContainer>
      )}
    </Fragment>
  );
};

export default ProfileBody;
