const posts = require("./Posts");
const users = require("./User");

users.hasMany(posts, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

posts.belongsTo(users, {
  foreignKey: "user_id",
});

module.exports = { users, posts };
