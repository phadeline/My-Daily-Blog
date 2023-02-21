const withAuth = require("../utils/auth");

const router = require("express").Router();
const { Post, Comments } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const allposts = await Post.findAll();
    const myposts = allposts.map((post) => post.get({ plain: true }));
    console.log(myposts);

    res.render("dashboard", {
      myposts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
