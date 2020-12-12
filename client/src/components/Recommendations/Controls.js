import React from "react";
import { Logo } from "../../common/Logo";
import { ControlsContainer } from "../../styles/Recommendations/Controls";

export const Controls = () => {
  return (
    <ControlsContainer>
      <div className='logo'>
        {" "}
        <Logo>
          <span>Recom</span>mend
        </Logo>
      </div>
      <ul>
        <li>Profile</li>
        <li>Contact</li>
        <li className='grow'><input type="text"/> click me</li>
      </ul>
    </ControlsContainer>
  );
};
