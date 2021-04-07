import React, { useContext, useReducer } from "react";
import { Form } from "../../common";
import { InputBuilder, Button } from "../../common";
import useForm from "../../hooks/UseForm";
import { gql, useQuery, useMutation } from "@apollo/client";
import { ADD_USER, LOGIN_USER } from "../../graphql";

const SignIn = ({ setMessage, setError }) => {
  const [formData, setFormData] = useForm({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const [
    loginUser,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(LOGIN_USER, {
    variables: {
      username,
      password,
    },
    onError(err) {
      setError(true);
      setMessage(err.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await loginUser();

    if (user) {
      let token = user.data.loginUser.token;
      localStorage["token"] = token;
      setMessage("Logged in!");
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputBuilder
        title='username'
        type='text'
        placeholder='Username'
        name='username'
        value={username}
        setFormData={setFormData}
        marg={"2rem"}
      />
      <InputBuilder
        title='password'
        inputType={"password"}
        placeholder='Password'
        name='password'
        value={password}
        setFormData={setFormData}
        marg={"2rem"}
      />

      <h5>Forgot your password?</h5>
      <Button backg='#fa607e' size='70%' inline center shadowC='#333'>
        {mutationLoading ? "Loading..." : "Login"}
      </Button>
    </Form>
  );
};

export default SignIn;
