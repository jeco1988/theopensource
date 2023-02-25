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
    _id: ID
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
    #addComment(gitHubID: ID!, commentText: String!): SavedGitHubRepo
    #addFavourite(userID: ID!, gitHubID: String!): SavedGitHubRepo
  }
`;
module.exports = typeDefs;
//#deleteComment
// #deleteFavourite
// type Query {
//     users: [User]
//     user(username: String!): User
//     thoughts(username: String): [Thought]
//     thought(thoughtId: ID!): Thought
//     me: User

// type Mutation{
//   AddUser
//   Login
//   AddComment
//   AddFavourite
//   #DeleteComment
//   #DeleteFavourite
// }
// # Define which operations are available via the front end
// type Mutation {
//   addUser(
//     name: String!
//     email: String!
//     password: String!
//     gitHubUsername: String
//   ): Auth
//   login(email: String!, password: String!): Auth
//   addComment(gitHubID: ID!, commentText: String!): SavedGitHubRepo
//   addFavourite(userID: ID!, gitHubID: String!): SavedGitHubRepo
// }
