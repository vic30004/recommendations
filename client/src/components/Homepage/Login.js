import React from "react";
import { Button } from "../../common";
import { LoginContainer, Nav, FormContainer } from "../../styles/Homepage";
import SignIn from "../Register/SignIn";
const Login = () => {
  return (
    <LoginContainer>
      <Nav>
        <Button marg='9px' size='100px'>
          Sign Up
        </Button>
      </Nav>

      <FormContainer>
        <h3>Welcome !</h3>
        <p>Sign in to your account</p>
        <SignIn />
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
