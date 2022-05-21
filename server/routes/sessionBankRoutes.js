const express = require("express");
const router = express.Router();
const {
  getSessionBank,
  setSessionBank,
  setSession,
  deleteSession,
} = require("../controllers/sessionBankController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getSessionBank).post(protect, setSession);
router.route("/setBank").post(setSessionBank);
router.route("/:id").delete(protect, deleteSession);

module.exports = router;
