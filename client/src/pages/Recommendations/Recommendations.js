import React, { useEffect } from "react";
import {
  Controls,
  AddSection,
  Recommendation,
  UpdatesSections,
} from "../../components/Recommendations/";
import { MainContainer } from "../../styles/Recommendations/Recommendations";

const Recommendations = (props) => {
  return (
    <>
      <Controls />
      <MainContainer>
        <AddSection />
        <Recommendation />
        <UpdatesSections />
      </MainContainer>
    </>
  );
};

export default Recommendations;
