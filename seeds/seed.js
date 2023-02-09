const sequelize = require("../config/connection");

const seedposts = require("./postsdata");
const seeduser = require("./userdata");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seeduser();
  await seedposts();

  process.exit(0);
};

// call the function to seed the database
seedAll();
