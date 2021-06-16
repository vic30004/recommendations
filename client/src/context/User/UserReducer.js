import { LOGIN, REGISTER_USER, USER_ERROR } from "../types";
import { LOADUSER } from "../../graphql/Users";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: [payload],
      };
    default:
      return state;
  }
};
