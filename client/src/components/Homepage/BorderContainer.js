import React from "react";
import { Border } from "../../styles/Homepage";
import About from "./About";
import Login from "./Login";
export const BorderContainer = () => {
  return (
    <Border>
      <About />
      <Login/>
    </Border>
  );
};
