const router = require("express").Router();

const userroutes = require("./userroutes");

const commentroutes = require("./commentroute");

const postroutes = require("./postroute");

router.use("/users", userroutes);

router.use("/comment", commentroutes);

router.use("/post", postroutes);

module.exports = router;
