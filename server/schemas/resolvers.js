const { AuthenticationError } = require("apollo-server-express");
const { User, Languages, SavedGitHubRepo } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUser: async (parent, { email }, context) => {
      return await User.findOne({ email });
    },
    getLanguages: async () => {
      return await Languages.find({});
    },

    getAllGitHubRepo: async () => {
      return await SavedGitHubRepo.find({});
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
