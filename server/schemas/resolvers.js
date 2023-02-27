const { AuthenticationError } = require("apollo-server-express");
const { User, Languages, SavedGitHubRepo } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    User: async (parent, { email }) => {
      return User.findOne({ email });
    },
    Languages: async (parent, args) => {
      return Languages.find();
    },
    GitHubRepo: async (parent, { gitHubID }) => {
      return SavedGitHubRepo.findOne({ gitHubID });
    },
  },

  Mutation: {
    addUser: async (parent, { fullname, username, email, password }) => {
      const user = await User.create({
        fullname,
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addMyFavourite: async (parent, { gitHubID, email }, context) => {
      const { _id } = await SavedGitHubRepo.findOne({ gitHubID });
      const user = await User.findOneAndUpdate(
        { email: email },
        {
          $addToSet: {
            myFavourites: { _id },
          },
        }
      );
      return user;
    },
  },
  // addNewComment: async (
  //   parent,
  //   { gitHubID, commmentText, commentAuthor },
  //   context
  // ) => {
  //   const comment = await SavedGitHubRepo.findOneAndUpdate(
  //     { gitHubID: gitHubID },
  //     {
  //       $addToSet: {
  //         userComment: {
  //           commmentText: commmentText,
  //           commentAuthor: commentAuthor,
  //         },
  //       },
  //     },
  //     { new: true }
  //   );
  //   return { comment };
  // },
};

module.exports = resolvers;
