import React, { useReducer, useEffect } from "react";
import UserContext from "./UserContext";
import { LOGIN, USER_ERROR } from "../types";
import { LOADUSER } from "../../graphql/Users";
import { useQuery } from "@apollo/client";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const { data, loading, error } = useQuery(LOADUSER);

  const handleError = () => {
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  };


  const loadUser = () => {
    dispatch({
      type: LOGIN,
      payload: data,
    });
  };

  useEffect(() => {
    if (localStorage["token"] !== "") {
      loadUser();
    }
  }, [loading, localStorage["token"]]);

  useEffect(()=>{
    if(error){
      handleError()
    }
  },[loading])
  return (
    <UserContext.Provider
      value={{
        loadUser,
        user: state.user,
        userLoading: state.loading,
        isAuthenticated: state.isAuthenticated,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
