import React, { useState, useEffect } from "react";
import { Button, Message } from "../../common";
import useToggle from "../../hooks/useToggle";
import { LoginContainer, Nav, FormContainer } from "../../styles/Homepage";
import SignIn from "../Register/SignIn";
import SignUp from "../Register/SignUp";
const Login = () => {
  const [user, setUser, toggle] = useToggle(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useToggle();

  useEffect(() => {
    if (message) {
      setInterval(() => {
        setMessage("");
        setError(false);
      }, 10000);
    }
    return () => {
      return;
    };
  }, [message]);

  return (
    <LoginContainer>
      <Nav>
        <Button marg='9px' size='100px' onClick={toggle}>
          {user ? "Sign Up" : "Sign In"}
        </Button>
      </Nav>

      <FormContainer>
        <h3>Welcome !</h3>
        {message ? (
          <Message
            error={error}
            message={message}
            on={message ? true : false}
          />
        ) : (
          ""
        )}
        {user ? <p>Sign in to your account</p> : <p>Create an account</p>}
        {user ? (
          <SignIn setError={setError} setMessage={setMessage} />
        ) : (
          <SignUp setMessage={setMessage} setError={setError} />
        )}
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
