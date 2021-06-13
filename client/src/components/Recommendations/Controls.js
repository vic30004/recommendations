import React, { useContext, useState, useEffect } from "react";
import { Logo } from "../common";
import { ControlsContainer } from "../../styles/Recommendations/Controls";
import UserContext from "../../context/User/UserContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Controls = () => {
  const userContext = useContext(UserContext);

  const { userLoading, user } = userContext;
  let history = useHistory();

  const handleLogout = () => {
    localStorage["token"] = "";
    history.push("/");
    return;
  };


  return (
    <ControlsContainer>
      <div className='logo'>
        {" "}
        <Logo>
          <span>Recom</span>mend
        </Logo>
      </div>
      <ul>
        <li>
          {" "}
          {user ? (
            <Link to={`/${user.loadUser[0].username}`}>Profile</Link>
          ) : (
            ""
          )}
        </li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </ControlsContainer>
  );
};
