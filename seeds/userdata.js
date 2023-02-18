const sequelize = require("../config/connection");

const { User } = require("../models");

const userdata = [
  {
    username: "Midrash",
    password: "abcdefg",
  },
  {
    username: "Fatine",
    password: "hijklmnop",
  },
];

const seeduser = () => User.bulkCreate(userdata);

module.exports = seeduser;
