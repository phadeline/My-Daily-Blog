const withAuth = require("../utils/auth");

const router = require("express").Router();
const { Post, Comments, User } = require("../models");

//get one post by id
router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comments }, { model: User }],
    });

    const commentsData = await Comments.findAll({
      where: { post_id: req.params.id },
      include: [{ model: User }],
    });

    if (!postData) {
      res.status(404).json({ message: "no post found with this id!" });
    }

    const comments = commentsData.map((comment) =>
      comment.get({ plain: true })
    );

    const posts = postData.get({ plain: true });
    console.log(posts);

    res.render("onePost", {
      posts,
      username: req.session.user,
      userId: req.session.user_id,
      comments,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get route for updating a post
router.get("/update/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!postData) {
      res.status(404).json({ message: "no review found with this id" });
      return;
    }

    const post = postData.get({ plain: true });

    res.render("updatePost", {
      post,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get route for deleting a single post

module.exports = router;
