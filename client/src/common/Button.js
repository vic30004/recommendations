import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.size ? props.size : "80px")};
  padding: 0.75rem 0;
  background: ${(props) => (props.backg ? props.backg : "transparent")};
  color: ${(props) => (props.color ? props.color : "#ffff")};
  border-radius: 50px;
  border: none;
  font-size: 13px;
  font-weight: bold;
  box-shadow: 0 0 3px;
  outline: none;
  height: 40px;
  margin-top: ${(props) => (props.marg ? props.marg : "1rem")};
  cursor: pointer;
  font-family: var(--header-font);
`;
