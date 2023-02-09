const router = require("express").Router();

const homeroutes = require("./homepage");

router.use("/", homeroutes);

module.exports = router;
