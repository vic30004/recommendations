import React from "react";
import { Button } from "../../common";
import useToggle from "../../hooks/useToggle";

import { LoginContainer, Nav, FormContainer } from "../../styles/Homepage";
import SignIn from "../Register/SignIn";
import SignUp from "../Register/SignUp";
const Login = ({ setError, setMessage }) => {
  const [user, setUser, toggle] = useToggle(true);

  return (
    <LoginContainer>
      <Nav>
        <Button marg='9px' size='100px' onClick={toggle}>
          {user ? "Sign Up" : "Sign In"}
        </Button>
      </Nav>

      <FormContainer>
        <h3>Welcome !</h3>
        {user ? <p>Sign in to your account</p> : <p>Create an account</p>}
        {user ? (
          <SignIn setMessage={setMessage} setError={setError} />
        ) : (
          <SignUp setMessage={setMessage} setError={setError} />
        )}
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
