const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    userID: ID
    name: String
    email: String
    password: String
    gitHubUsername: String
    myFavourites: [SavedGitHubRepo]
  }
  type SavedGitHubRepo {
    gitHubID: ID
    owner: String
    repositoryName: String
    userComment: [userComments]
  }
  type userComments {
    commentText: String
    commentAuthor: String
    createdAt: String
  }
  type Languages {
    languageName: String
    description: String
  }
  type Auth {
    token: ID!
    user: User
  }
  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    getUser(email: String!): User
    getLanguages: [Languages]
    getGitHubRepo(gitHubID: ID!): SavedGitHubRepo
  }
  # Define which operations are available via the front end
  type Mutation {
    addUser(
      name: String!
      email: String!
      password: String!
      gitHubUsername: String
    ): Auth
    login(email: String!, password: String!): Auth
    addMyFavourite(gitHubID: String!, email: String!): User
    #addNewComment(
    #gitHubID: ID!
    #commentText: String!
    #commentAuthor: String!
    #): SavedGitHubRepo
  }
`;
module.exports = typeDefs;
//#deleteComment
// #deleteFavourite
