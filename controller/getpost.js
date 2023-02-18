const withAuth = require("../utils/auth");

const router = require("express").Router();
const { Post, Comments } = require("../models");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comments }],
    });

    // const commentsData = await findAll({
    //   where: { post_id: req.params.id },
    // });
    if (!postData) {
      res.status(404).json({ message: "no post found with this id!" });
    }

    // const comments = commentsData.map((comment) =>
    //   comment.get({ plain: true })
    // );
    const posts = postData.get({ plain: true });
    res.render("onePost", {
      posts,
    //   comments,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
