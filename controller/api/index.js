const router = require("express").Router();

const userroutes = require("./userroutes")

router.use("/users", userroutes)


module.exports = router;