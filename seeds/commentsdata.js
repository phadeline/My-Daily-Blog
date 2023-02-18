const { Comments } = require("../models");

const commentsData = [
  {
    post_id: 1,
    comment: "The weather was nice today",
    comment_user: "1",
  },
  {
    post_id: 1,
    comment: "Today was a fantastic day!",
    comment_user: "2",
  },
  {
    post_id: 2,
    comment: "I am eating healthier and going to the gym",
    comment_user: "2",
  },
  {
    post_id: 2,
    comment: "My new year's resolution is to eat healthier",
    comment_user: "1",
  },
];

const seedcomments = () => Comments.bulkCreate(commentsData);

module.exports = seedcomments;
