import React from "react";
import { useHistory } from "react-router-dom";

export const SignUpText = (type ) => {
  let history = useHistory();

  const generateReasonText = (type) => {
    if (type === "follow") {
      return <p>Please login to follow.</p>;
    } else if (type === "add") {
      return <p>Please login to add a new recommendation.</p>;
    } else if (type === "add-item") {
      return <p>Please login to add a new item.</p>;
    }
  };
console.log(generateReasonText(type))
  const redirectToSignIn = () => {
    return history.push("/");
  };
  return (
    <div>
      {generateReasonText(type)}
      <button onClick={redirectToSignIn}>Sing In</button>
    </div>
  );
};
