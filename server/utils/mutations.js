import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
mutation createUser($email: String!, $password: String!, $githubUsername: String!, $firstName: String!, $lastName: String!) {
    createUser(email: $email, password: $password, githubUsername: $githubUsername, firstName: $firstName, lastName: $lastName) {
      id
      email
      firstName
      lastName
      githubUsername
    }
  }
`;