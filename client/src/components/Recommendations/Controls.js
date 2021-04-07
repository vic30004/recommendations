import React, { useContext } from "react";
import { Logo } from "../common";
import { ControlsContainer } from "../../styles/Recommendations/Controls";
import UserContext from "../../context/User/UserContext";
import { Link } from "react-router-dom";

export const Controls = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
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
          <Link to={`/${user.loadUser[0].username}`}>Profile</Link>
        </li>
      </ul>
    </ControlsContainer>
  );
};
