const router = require("express").Router();

const userroutes = require("./userroutes")


const commentroutes = require("./commentroute");

router.use("/users", userroutes)

router.use("/comment", commentroutes)




module.exports = router;