import styled from "styled-components";

export const ControlsContainer = styled.div`
  display: flex;
  background: transparent;
  width: 60%;
  max-width: 80%;
  margin: 3% auto;
  align-items: center;
  border: none;
  border-bottom: 1px solid #f9f6f673;
  height: 10%;
  color: #fff;
  font-family: var(--header-font);
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  ul {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 0 auto;
    li {
      list-style-type: none;
      width: 33.3%;
      cursor: pointer;
    }
    .grow {
      &:hover > input {
        width: 50%;
        opacity: 1;
      }
      input {
        width: 0;
        opacity: 0;
        transition: all 0.5s ease-in-out;
        border: none;
        border-bottom: 1px solid #333;
        outline: none;
        padding: 0 0.3rem;
      }
    }
  }
`;
