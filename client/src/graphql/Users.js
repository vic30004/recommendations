import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      id
      username
    }
  }
`;

export const GET_USER = gql`
  query($id: Int!) {
    user(id: $id) {
      username
    }
  }
`;

export const LOGIN_USER = gql`
  mutation($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
    }
  }
`;
