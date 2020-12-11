import React, { useState, useEffect } from "react";
import { Main } from "../../styles/Homepage";
import { BorderContainer } from "../../components/Homepage";
import { Message } from "../../common";
import useForm from "../../hooks/UseForm";
import useToggle from "../../hooks/useToggle";
const Homepage = () => {
  return (
    <Main>
      <BorderContainer />
    </Main>
  );
};

export default Homepage;
