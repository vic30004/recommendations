import React, { useReducer, useEffect } from "react";
import UserContext from "./UserContext";
import { LOGIN, REGISTER_USER } from "../types";
import { LOADUSER } from "../../graphql/Users";
import { gql, useQuery, useMutation } from "@apollo/client";
import useForm from "../../hooks/UseForm";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = {
    user: [],
    isAuthenticated: false,
    loading: true,
    error: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const { data, loading, error } = useQuery(LOADUSER);

  if (error) {
    state.error.push(error);
  }


  const loadUser = () => {
    dispatch({
      type: LOGIN,
      payload: data,
    });
  };

  useEffect(() => {
    loadUser();
  }, [loading]);

  return (
    <UserContext.Provider
      value={{
        loadUser,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;