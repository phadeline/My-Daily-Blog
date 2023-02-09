const sequelize = require("../config/connection");

const { users } = require("../models");

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

const seeduser = () => users.bulkCreate(userdata);

module.exports = seeduser;
