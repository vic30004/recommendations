import React from "react";
import { Form } from "../../common/Form";
import { InputBuilder, Button } from "../../common";
import useForm from "../../hooks/UseForm";
import { gql, useQuery, useMutation } from "@apollo/client";
import { ADD_USER } from "../../graphql";

const SignUp = () => {
  const [formData, setFormData, reset] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const [
    addUser,
    { loading: mutationLoading, error: mutationError, data },
  ] = useMutation(ADD_USER);

  const { username, email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      return;
    }
    try {
      addUser({ variables: { username, email, password } });
    } catch (error) {
      console.log(addUser.error);
    }
    reset();
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
        marg={"1rem"}
      />
      <InputBuilder
        title='email'
        type='text'
        placeholder='Email'
        name='email'
        value={email}
        setFormData={setFormData}
        marg={"0.75rem"}
      />
      <InputBuilder
        title='password'
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        setFormData={setFormData}
        marg={"0.75rem"}
      />
      <Button backg='#fa607e' size='70%' inline center shadowC='#333'>
        {addUser.loading ? "Loading..." : "Sign Up"}
      </Button>
    </Form>
  );
};

export default SignUp;
