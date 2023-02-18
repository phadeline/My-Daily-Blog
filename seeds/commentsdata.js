const { Comments } = require("../models");

const commentsData = [
  {
    post_id: 1,
    comment: "The weather was nice today",
  },
  {
    post_id: 2,
    comment: "I am eating healthier and going to the gym",
  },
];

const seedcomments = () => Comments.bulkCreate(commentsData);

module.exports = seedcomments;
