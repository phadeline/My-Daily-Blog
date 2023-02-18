const router = require("express").Router();

const homeroutes = require("./homepage");
const apiroutes = require("./api")
const getPost = require("./getpost")

router.use("/", homeroutes);
router.use("/api", apiroutes )
router.use("/post", getPost)

module.exports = router;
