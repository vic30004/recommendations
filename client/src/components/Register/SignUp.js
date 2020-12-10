import React from "react";
import { Form } from "../../common/Form";
import { InputBuilder, Button } from "../../common";
import useForm from "../../hooks/UseForm";

const SignUp = () => {
  const [formData, setFormData] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  return (
    <Form>
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
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUp;
