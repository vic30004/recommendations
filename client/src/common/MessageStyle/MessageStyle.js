import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
from{
    transform: scale(0);
    opacity: 0
}
to{
    transform: scale(1)
    opacity:1;
}
`;

const animation = (props) =>
  css`
    ${slideIn} 0.5s ease-in 1;
  `;

export const MessageContainer = styled.div`
  width: 85vw;
  height: 10%;
  background: ${(props) => (props.error ? "#dd7291" : "#92CCC2")};
  box-shadow: 1px -3px 5px 2px #424242;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-family: var(--header-font);
  font-size: 16px;
  animation: ${animation};
  display: ${(props) => (props.on ? "block" : "none")};
`;
