import React from "react";
import { Form } from "../../common/Form";
import { InputBuilder, Button } from "../../common";
import useForm from "../../hooks/UseForm";
import { gql, useQuery, useMutation } from "@apollo/client";
import { ADD_USER } from "../../graphql";

const SignUp = ({ setError, setMessage }) => {
  const [formData, setFormData, reset] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;

  const [
    addUser,
    { loading: mutationLoading, error: mutationError, data },
  ] = useMutation(ADD_USER, {
    variables: {
      username,
      email,
      password,
    },
    onError(err) {
      setError(true);
      setMessage(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      return;
    }
    try {
      addUser();
    } catch (error) {
      console.log(error);
    }
    if (!mutationError) {
      setMessage("Account created!");
      reset();
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputBuilder
        title='username'
        inputType={"text"}
        placeholder='Username'
        name='username'
        value={username}
        setFormData={setFormData}
        required={true}
        marg={"1rem"}
      />
      <InputBuilder
        title='email'
        inputType={"email"}
        placeholder='Email'
        name='email'
        value={email}
        required={true}
        setFormData={setFormData}
        marg={"0.75rem"}
      />
      <InputBuilder
        title='password'
        inputType={"password"}
        placeholder='Password'
        name='password'
        value={password}
        required={true}
        setFormData={setFormData}
        marg={"0.75rem"}
      />
      <Button backg='#fa607e' size='70%' inline center shadowC='#333'>
        {mutationLoading ? "Loading..." : "Sign Up"}
      </Button>
    </Form>
  );
};

export default SignUp;
