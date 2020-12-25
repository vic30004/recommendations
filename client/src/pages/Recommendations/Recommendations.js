import React from "react";
import Modal from "../../common/Modal.js";
import {
  Controls,
  AddSection,
  Recommendation,
  UpdatesSections,
} from "../../components/Recommendations/";
import AddContainer from "../../components/Recommendations/AddContainer";
import useToggle from "../../hooks/useToggle";
import { MainContainer } from "../../styles/Recommendations/Recommendations";

const Recommendations = (props) => {
  const [modal, setModal, toggle] = useToggle();
  return (
    <>
      {modal ? (
        <Modal>
          <AddContainer toggle={toggle}/>
        </Modal>
      ) : (
        ""
      )}
      <Controls />
      <MainContainer>
        <AddSection toggle={toggle}/>
        <Recommendation />
        <UpdatesSections />
      </MainContainer>
    </>
  );
};

export default Recommendations;
