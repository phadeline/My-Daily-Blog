const withAuth = require("../../utils/auth");

const router = require("express").Router();

const { Comments } = require("../../models");

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      post_id: req.body.locationId,
      comment: req.body.commentText,
      comment_user: req.session.user_id,
    });
    if (!newComment) {
      res.status(404).json({ message: "Cannot create new comment" });
      return;
    }
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
});

module.exports = router;
