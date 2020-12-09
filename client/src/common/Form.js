import styled from "styled-components";

export const Form = styled.form`
  max-width: 100%;
  h5 {
    text-align: right;
    width: 85%;
    color: var(--light-primary-color);
    margin-top: 0;
    font-family: var(--header-font);
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 0 auto;

  input {
    background-color: #3d46a7;
    box-shadow: inset 1px 1px 1px #000;
    border: none;
    outline: none;
    /* padding: 0.7rem 1rem; */
    color: #fff;
    width: 95%;
    height: 35px;
    padding: 0 0.5rem;
    font-family: var(--header-font);
    margin-bottom: 1rem;
    &::placeholder {
      color: #6168bb;
    }
  }
  label {
    color: var(--light-primary-color);
    width: 100%;
    margin-bottom: 1rem;
    font-size: 18px;
    text-transform: capitalize;
  }
`;
