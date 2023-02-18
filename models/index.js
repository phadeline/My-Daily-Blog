const Post = require("./Posts");
const User = require("./User");
const Comments = require("./comments");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comments, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Comments.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Comments, {
  foreignKey: "comment_user",
  onDelete: "SET NULL",
});

Comments.belongsTo(User, {
  foreignKey: "comment_user",
});
module.exports = { Post, User, Comments };
