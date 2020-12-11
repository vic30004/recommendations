import React from "react";
import { Border } from "../../styles/Homepage";
import About from "./About";
import Login from "./Login";
export const BorderContainer = ({ setError, setMessage }) => {
  return (
    <Border>
      <About />
      <Login setMessage={setMessage} setError={setError} />
    </Border>
  );
};
