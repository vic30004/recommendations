import styled from "styled-components";

const inputTextArea = `  
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
`;
const spanSetUp = `
align-self: flex-start;
color: var(--light-primary-color);
padding: 0 0.5rem;
transition: all 0.3s ease-in-out;
letter-spacing: 1.2px;
`;

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
  .empty {
    transform: ${(props) =>
      props.Area ? "translateY(-350%)" : "translateY(-230%)"};
    ${spanSetUp};
  }
  .full {
    ${spanSetUp}
    transform: translateY(-450%);
  }

  input:focus + span {
    transform: translateY(-450%);
  }
  textarea:focus + span {
    transform: translateY(-520%);
  }
`;

export const Input = styled.input`
  ${inputTextArea}
  margin-top: ${(props) => (props.marg ? props.marg : "1rem")};
  background-color: ${(props) =>
    props.red ? "rgba(221, 114, 145, 1)" : "#3d46a7"};
`;
export const TextArea = styled.textarea`
  ${inputTextArea}
  margin-top: ${(props) => (props.marg ? props.marg : "1rem")};
  background-color: ${(props) =>
    props.red ? "rgba(221, 114, 145, 1)" : "#3d46a7"};
  /* height: 50px; */
  resize: none;
  height: 50px;
  padding-top: 0.2rem;
`;
