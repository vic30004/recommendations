import React from "react";
import { Form } from "../../common/Form";
import { InputBuilder, Button } from "../../common";

const SignIn = () => {
  return (
    <Form>
      <InputBuilder
        title='username'
        type='text'
        placeholder='Username'
        name='username'
        value=''
      />
      <InputBuilder
        title='password'
        type='password'
        placeholder='********'
        name='password'
        value=''
      />

      <h5>Forgot your password?</h5>
      <Button backg='#fa607e' size='70%' inline center shadowC='#333'>
        Login
      </Button>
    </Form>
  );
};

export default SignIn;
