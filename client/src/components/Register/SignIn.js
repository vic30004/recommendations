import React from "react";
import { Form } from "../../common/Form";
import { InputBuilder, Button } from "../../common";
import useForm from "../../hooks/UseForm";
import { gql, useQuery } from '@apollo/client';

const SIGN_IN = gql`


`

const SignIn = () => {
  const [formData, setFormData] = useForm({
    username: "",
    password: "",
  });

  const {username, password} = formData
  return (
    <Form>
      <InputBuilder
        title='username'
        type='text'
        placeholder='Username'
        name='username'
        value={username}
        setFormData= {setFormData}
        marg={'2rem'}
      />
      <InputBuilder
        title='password'
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        setFormData= {setFormData}
        marg={'2rem'}


      />

      <h5>Forgot your password?</h5>
      <Button backg='#fa607e' size='70%' inline center shadowC='#333'>
        Login
      </Button>
    </Form>
  );
};

export default SignIn;
