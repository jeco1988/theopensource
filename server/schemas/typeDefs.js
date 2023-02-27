const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    fullname: String
    email: String
    password: String
    username: String
    myFavourites: [SavedGitHubRepo]
  }
  type SavedGitHubRepo {
    _id: ID
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
    User(email: String!): User
    Languages: [Languages]
    GitHubRepo(gitHubID: ID!): SavedGitHubRepo
  }
  # Define which operations are available via the front end
  type Mutation {
    addUser(
      fullname: String!
      email: String!
      password: String!
      username: String
    ): Auth
    login(email: String!, password: String!): Auth
    addMyFavourite(gitHubID: String!, email: String!): User
  }
`;
module.exports = typeDefs;
//#deleteComment
// #deleteFavourite
// #addNewComment(gitHubID: ID!, commentText: String! commentAuthor: String!): SavedGitHubRepo
