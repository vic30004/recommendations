import { LOGIN, REGISTER_USER } from "../types";
import { LOADUSER } from "../../graphql/Users";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      console.log(payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    default:
      return state;
  }
};
