import React, { useState } from "react";
import Header from "../../components/Profile/Header";
import ProfileBody from "../../components/Profile/ProfileBody";
import { useQuery, useMutation } from "@apollo/client";
import { GETUSERBYUSERNAME } from "../../graphql/Users";
import {
  GET_FOLLOWS_BY_USER_ID,
  GET_RECOMMENDATION_BY_ID,
} from "../../graphql";

const Profile = (props) => {
  const [username, setUsername] = useState(props.match.params.username || "");
  // Get user by Username
  const { data: userData, loadin: userLoading, error: userError } = useQuery(
    GETUSERBYUSERNAME,
    {
      variables: { username },
    }
  );

  // Query to get recommendations
 
  return (
    <div>
      {userError ? (
        <h1>No user was found</h1>
      ) : (
        <>
          {!userLoading && userData ? (
            <>
              <Header user={userData.getUserByUsername} />
              <ProfileBody />{" "}
            </>
          ) : (
            "Loading"
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
