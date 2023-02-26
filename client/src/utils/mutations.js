import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser(
    $fullName: String!
    $username: String
    $email: String!
    $password: String!
  ) {
    addUser(
      fullname: $fullname
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_BOOKMARK = gql`
  mutation addMyFavourite($gitHubID: String!, $email: String!) {
    addMyFavourite(gitHubID: $gitHubID, email: $email)
  }
`;
