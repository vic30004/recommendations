import React, { useContext } from "react";
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
import { SignUpText } from "../../components/common/SignUpText.js";
import UserContext from "../../context/User/UserContext";

const Recommendations = (props, { client }) => {
  const [modal, setModal, toggle] = useToggle();
  const [signinModal, setSigninModal, toggleSignin] = useToggle();

  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <>
      {modal ? (
        <Modal>
          <AddContainer toggle={toggle} />
        </Modal>
      ) : (
        ""
      )}
      {signinModal ? <Modal>{SignUpText("add", toggleSignin)}</Modal> : ""}
      <Controls />
      <MainContainer>
        <AddSection toggle={user ? toggle : toggleSignin} />
        <Recommendation />
        <UpdatesSections />
      </MainContainer>
    </>
  );
};

export default Recommendations;
