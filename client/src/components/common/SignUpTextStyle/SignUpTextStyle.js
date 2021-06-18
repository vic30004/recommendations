import styled from "styled-components";

export const SignUpTextContainer = styled.div`
  background-color: var(--primary-100);
  width: 400px;
  height: 200px;
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: bold;
  font-family: var(--header-font);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;

  i {
    align-self: flex-end;
    font-size: 1.3rem;
    color: var(--third-color);
    cursor: pointer;
  }

  @media only screen and (max-width: 400px) {
    font-size: 1.4rem;
    i {
      font-size: 1rem;
    }
  }
`;
