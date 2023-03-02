const withAuth = require("../utils/auth");

const router = require("express").Router();
const { Post, Comments } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const allposts = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    const myposts = allposts.map((post) => post.get({ plain: true }));
    console.log(myposts);

    res.render("dashboard", {
      myposts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ message: "dashboard route not working" });
  }
});

module.exports = router;
