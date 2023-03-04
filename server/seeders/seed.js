const db = require("../config/connection.js");
const { User, Languages, SavedGitHubRepo } = require("../models");

const userSeeds = require("./userSeeds.json");
const languageSeeds = require("./languageSeeds.json");
const savedGitHubRepoSeeds = require("./savedGitHubRepoSeeds.json");
db.once("open", async () => {
  try {
    //delete the old data
    await User.deleteMany({});
    await Languages.deleteMany({});
    await SavedGitHubRepo.deleteMany({});

    await Languages.create(languageSeeds);
    await User.create(userSeeds);

    for (let i = 0; i < savedGitHubRepoSeeds.length; i++) {
      const { _id, userEmail } = await SavedGitHubRepo.create(
        savedGitHubRepoSeeds[i]
      );
      const user = await User.findOneAndUpdate(
        { email: userEmail },
        {
          $addToSet: {
            myFavourites: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
