import styled from "styled-components";

export const LoginContainer = styled.section`
  background: var(--primary-color);
  width: 40%;
  flex: 1 2;
  display: flex;
  flex-flow: column;
  padding: 1rem;
  @media only screen and (max-width: 600px) {
    flex-basis: 20%;
  }
  @media only screen and (max-width: 440px) {
    width: 91%;
    overflow: auto;
  }
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  height: 90px;
  justify-content: flex-end;
  /* align-items: center; */
`;

export const FormContainer = styled.section`
  display: flex;
  flex-flow: column;
  h3 {
    color: white;
    font-family: var(--header-font);
    text-align: center;
    margin-bottom: 0;
  }
  p {
    font-family: var(--header-content);
    color: #ffffffa3;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1.3px;
  }
`;
