const { AuthenticationError } = require("apollo-server-express");
const { User, Languages, SavedGitHubRepo } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUser: async (parent, { email }) => {
      return User.findOne({ email }).populate("myFavourites");
    },
    getLanguages: async (parent, args) => {
      return Languages.find();
    },
    getGitHubRepo: async (parent, { gitHubID }) => {
      return SavedGitHubRepo.findOne({ gitHubID });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password, gitHubUsername }) => {
      const user = await User.create({ name, email, password, gitHubUsername });
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

    // addComment: async (parent, { commentText }) => {
    //   const comment = await Comments.create({ commentText });
    //   return comment;
    // },
    // addFavourite: async (parent, { gitHubID }, context) => {
    //   const user = await User.findOneAndUpdate(
    //     { _id: context.user._id },
    //     { $pull: { myFavourites: gitHubID } },
    //     { new: true }
    //   );
    //   return user;
    // },
  },
};

module.exports = resolvers;
