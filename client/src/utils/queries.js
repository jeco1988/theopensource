import { gql } from "@apollo/client";

export const GET_SINGLE_GITHUB_REPO = gql`
  query getSingleGitHubRepo($gitHubID: ID!) {
    getGitHubRepo {
      owner
      repositoryName
      userEmail
      userComment {
        commentText
        commentAuthor
        createdAt
      }
      }
    }
  }
`;
