const express = require("express");
const router = express.Router();
router.route("/").get((req, res) => {
  res.json([{ userName: "张三" }]);
});

module.exports = router;
