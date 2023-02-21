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
    owner: String
    repositoryName: String
    gitHubID: Number
    _id: ID
  }
  type Language {
    languageName: String
    description: String
  }
  type Comments {
    commentID: ID
    commentText: String
    userID: [User]
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }
  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    user(name: String!): User
    languages: [Languages]
  }
  type Mutation{
    AddUser
    Login
    AddComment
    AddFavourite
    #DeleteComment
    #DeleteFavourite
  }
`;
module.exports = typeDefs;

// type Query {
//     users: [User]
//     user(username: String!): User
//     thoughts(username: String): [Thought]
//     thought(thoughtId: ID!): Thought
//     me: User
