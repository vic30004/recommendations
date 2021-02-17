import React from "react";

const Header = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>Welcome to {user[0].username} profile </h1>
    </div>
  );
};

export default Header;
