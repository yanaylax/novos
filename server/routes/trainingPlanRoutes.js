const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Here's the training plan",
  });
});

module.exports = router;
