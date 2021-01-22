import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalButton = styled.div`
  position: fixed;
  background-color: var(--third-color);
  bottom: 20px;
  right: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
`;
