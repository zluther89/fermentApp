const router = require("express").Router();
const { ferments, types, status } = require("../controller");

router.get("/ferments", ferments.get);
router.post("/ferments", ferments.post);
router.delete("/ferments", ferments.delete);

router.get("/types", types.get);

router.get("/status", status.get);

module.exports = router;
