import styled from "styled-components";

export const Border = styled.div`
  width: 85vw;
  height: 90vh;
  background: #ffffff;
  display: flex;
  box-shadow: 4px -4px 3px 2px rgb(0 0 0 / 20%);
  border: none;
  @media only screen and (max-width: 440px) {
    flex-flow: column-reverse;
    box-shadow: -1px 0px 5px 8px rgb(0 0 0 / 20%);
    height: 100%;
  }
`;
