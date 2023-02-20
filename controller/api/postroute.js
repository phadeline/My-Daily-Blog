const router = require("express").Router();

const { Post, Comments, User } = require("../../models");

const withAuth = require("../../utils/auth");

//update a post by id
router.put("/:id", withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);
    console.log(req.params.id);
    const postData = await Post.update(
      {
        title: req.body.inputTitle,
        content: req.body.inputPost,
        // user_id: req.session.user_id,
      },
      {
        where: { id: req.params.id },
      }
    ).catch((err) => {
      res.json(err);
      return;
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log("not working");
    res.status(500).json(err);
    return;
  }
});

//delete a post by id
// router.delete("/:id")

module.exports = router;
