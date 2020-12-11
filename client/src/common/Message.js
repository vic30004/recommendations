import React from "react";
import { MessageContainer } from "./MessageStyle/MessageStyle";
export const Message = ({ error, message, status, on }) => {
  return (
    <MessageContainer error={error} on={on}>
      {message}
    </MessageContainer>
  );
};
