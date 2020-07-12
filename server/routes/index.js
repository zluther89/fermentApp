const router = require("express").Router();
const { ferments } = require("../controller");

router.get("/ferments", ferments.get);

module.exports = router;
