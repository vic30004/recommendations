import React from "react";
import { AddSectionContainer } from "../../styles/Recommendations";

export const AddSection = ({ toggle }) => {
  return (
    <AddSectionContainer onClick={toggle}>
      {" "}
      + Add Recommendation
    </AddSectionContainer>
  );
};
