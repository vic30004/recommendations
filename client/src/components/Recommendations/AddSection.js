import React from "react";
import { AddSectionContainer } from "../../styles/Recommendations";

export const AddSection = ({ toggle }) => {
  return (
    <AddSectionContainer onClick={toggle}>
      {" "}
      <h5 id="large">
        + Add Recommendation
      </h5>
    <h5 id="small"><i class="fas fa-plus"></i></h5>
    </AddSectionContainer>
  );
};
