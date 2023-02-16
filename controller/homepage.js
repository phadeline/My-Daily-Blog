const withAuth = require("../utils/auth");

const router = require("express").Router();
const { posts } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const allposts = await posts.findAll();
    const myposts = allposts.map((post) => post.get({ plain: true }));

    res.render("home", {
      layout: "main",
      myposts,
      loggedIn: req.session.logged_in,
      user_id: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
