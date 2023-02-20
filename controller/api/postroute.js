const router = require("express").Router();

const { Post } = require("../../models");

const withAuth = require("../../utils/auth");



//update a post by id
router.put("/:id")


//delete a post by id
router.delete("/:id")


module.exports = router;

