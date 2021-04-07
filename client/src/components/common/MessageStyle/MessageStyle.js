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
    ${slideIn} 0.3s ease-in 1;
  `;

export const MessageContainer = styled.div`
  background: ${(props) => (props.error ? "#dd7291" : "#92CCC2")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-family: var(--header-font);
  font-size: 13px;
  animation: ${animation};
  display: ${(props) => (props.on ? "block" : "none")};
  text-align: center;
  margin-top: 0.4rem;
  padding: 3px;
`;
