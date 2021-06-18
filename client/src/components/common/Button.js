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
  box-shadow: 0 0 3px ${(props) => (props.shadowC ? props.shadowC : "#fff")};
  outline: none;
  height: 40px;

  cursor: pointer;
  font-family: var(--header-font);
  display: ${(props) => (props.inline ? "inherit" : "block")};
  margin: ${(props) => (props.center ? "0 auto" : "0")};
  margin-top: ${(props) => (props.marg ? props.marg : "1rem")};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 0 1.5px ${(props) => (props.shadowC ? props.shadowC : "#fff")};
  }

  &:active {
    transform: translateY(3px);
    box-shadow: none;
  }
`;
