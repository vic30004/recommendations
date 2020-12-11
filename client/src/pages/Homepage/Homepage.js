import React, { useState, useEffect } from "react";
import { Main } from "../../styles/Homepage";
import { BorderContainer } from "../../components/Homepage";
import { Message } from "../../common";
import useForm from "../../hooks/UseForm";
import useToggle from "../../hooks/useToggle";
const Homepage = () => {
  const [message, handleChange, reset, setMessage] = useForm({
    text: "",
    status: "",
    on: false,
  });
  const { text, status, on } = message;
  const [error, setError] = useToggle();

  useEffect(() => {
    if (on) {
      setInterval(() => {
        setMessage({ on: false });
      }, 5000);
    }
  }, [on]);

  return (
    <Main>
      <Message message={text} error={error} on={on} />
      <BorderContainer setError={setError} setMessage={setMessage} />
    </Main>
  );
};

export default Homepage;
