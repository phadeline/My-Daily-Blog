const sequelize = require("../config/connection")

const seedposts = require("./postsdata");
const seeduser = require("./userdata");
const seedcomments = require("./commentsdata");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seeduser();
  await seedposts();
  await seedcomments()

  process.exit(0);
};

// call the function to seed the database
seedAll();
