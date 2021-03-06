import React, { useState, useEffect } from "react";
import Header from "../../components/Profile/Header";

import { useQuery } from "@apollo/client";
import { GETUSERBYUSERNAME } from "../../graphql/Users";

const Profile = (props) => {
  const [username, setUsername] = useState(props.match.params.username || "");

  useEffect(() => {
    setUsername(props.match.params.username);
  }, [props.match.params.username]);

  // Get user by Username
  const {
    data: userData,
    loadin: userLoading,
    error: userError,
  } = useQuery(GETUSERBYUSERNAME, {
    variables: { username },
  });

  // Query to get recommendations
  return (
    <div>
      {!userData ? (
        "loading..."
      ) : (
        <>
          {!userLoading && userData ? (
            <>
              <Header user={userData.getUserByUsername} />
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
