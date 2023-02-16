const Post = require("./Posts");
const User = require("./User");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
