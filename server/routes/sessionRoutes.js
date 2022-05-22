const express = require("express");
const router = express.Router();
const {
  getSessions,
  addSession,
  deleteSession,
  updateSession,
} = require("../controllers/sessionController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getSessions).post(protect, addSession);
router
  .route("/:id")
  .delete(protect, deleteSession)
  .post(protect, updateSession);

module.exports = router;
