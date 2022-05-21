const express = require("express");
const router = express.Router();

const {
  getSessionBank,
  setSessionBank,
  setSession,
  deleteSession,
} = require("../controllers/sessionBankController");

router.route("/").get(getSessionBank).post(setSession);
router.route("/setBank").post(setSessionBank);
router.route("/:id").delete(deleteSession);

module.exports = router;
