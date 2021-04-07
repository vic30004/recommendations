import React, { useEffect, useRef, useState, useCallback } from "react";
import Modal from "../../components/common/Modal.js";
import {
  Controls,
  AddSection,
  Recommendation,
  UpdatesSections,
} from "../../components/Recommendations/";
import AddContainer from "../../components/Recommendations/AddContainer";
import useToggle from "../../components/hooks/useToggle";
import { MainContainer } from "../../styles/Recommendations/Recommendations";

const Recommendations = (props) => {
  const [modal, setModal, toggle] = useToggle();

  return (
    <>
      {modal ? (
        <Modal>
          <AddContainer toggle={toggle} />
        </Modal>
      ) : (
        ""
      )}
      <Controls />
      <MainContainer>
        <AddSection toggle={toggle} />
        <Recommendation />
        <UpdatesSections />
      </MainContainer>
    </>
  );
};

export default Recommendations;
