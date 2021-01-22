import React from "react";
import { AddSectionContainer } from "../styles/Recommendations";
import { ModalButton } from "./ModalStyles/ModalStyles";

const ModalTrigger = ({ toggle }) => {
  return (
    <ModalButton onClick={toggle}>
      <h5 id='small'>
        <i class='fas fa-plus'></i>
      </h5>
    </ModalButton>
  );
};

export default ModalTrigger;
