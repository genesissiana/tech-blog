const router = require("express").Router();

//home route server homepage
router.get("/", (req, res) => {
  res.send("home");
});

module.exports = router;