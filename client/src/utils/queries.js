import { gql } from "@apollo/client";

export const QUERY_GITHUB_REPO = gql`
  query getGitHubRepo {
    owner
    repositoryName
    description
    language
    url
  }
`;

export const QUERY_SINGLE_GITHUB_REPO = gql`
  query getSingleGitHubRepo($gitHubID: ID!) {
    getGitHubRepo {
      owner
      repositoryName
      description
      language
      url
      userComment {
        commentText
        commentAuthor
        createdAt
      }
      issue {
        issueTitle
        url
      }
    }
  }
`;
