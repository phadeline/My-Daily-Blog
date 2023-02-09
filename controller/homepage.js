const withAuth = require("../utils/auth");

const router = require("express").Router();
const { posts } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allposts = await posts.findAll();
    const myposts = allposts.map((post) => post.get({ plain: true }));

    res.render("home", {
      layout: "main",
      myposts,
      loggedIn: req.session.loggedIn,
      user_id: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
