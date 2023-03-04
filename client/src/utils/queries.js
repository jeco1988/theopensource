import { gql } from "@apollo/client";

export const QUERY_GITHUB_REPO = gql`
  query GetAllGitHubRepo {
    getAllGitHubRepo {
      description
      gitHubID
      issues {
        title
        url
      }
      language
      owner
      repositoryName
      url
      userComment {
        commentAuthor
        commentText
        createdAt
      }
      userEmail
    }
  }
`;
export const QUERY_LANG = gql`
  query GetLanguages {
    getLanguages {
      description
      languageName
    }
  }
`;
// owner
//     repositoryName
//     description
//     language
//     url
//     userEmail
//     userComment {
//       commentText
//       commentAuthor
//       createdAt
//     }
//     issues {
//       title
//       url
//     }
