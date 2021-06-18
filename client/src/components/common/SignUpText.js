import React from "react";
import { useHistory } from "react-router-dom";
import { SignUpTextContainer } from "./SignUpTextStyle/SignUpTextStyle";
import { Button } from "./Button";

export const SignUpText = (type, toggle) => {
  let history = useHistory();

  const generateReasonText = (type) => {
    if (type === "follow") {
      return <p>Please Login to Follow</p>;
    } else if (type === "add") {
      return <p>Please login to add a new recommendation.</p>;
    } else if (type === "add-item") {
      return <p>Please login to add a new item.</p>;
    }
  };
  const redirectToSignIn = () => {
    return history.push("/");
  };
  return (
    <SignUpTextContainer>
      <i class='fas fa-times-circle' onClick={toggle}></i>
      {generateReasonText(type)}
      <Button
        onClick={redirectToSignIn}
        backg={"var(--secondary-color)"}
        shadowC={"#333"}
        size={"150px"}
      >
        Sing In
      </Button>
    </SignUpTextContainer>
  );
};
