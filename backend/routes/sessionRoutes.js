const express = require("express");
const router = express.Router();
const { getAllSessions, createSession } = require("../controllers/sessionController");
const auth = require("../middleware/auth");

router.get("/", getAllSessions);
router.post("/", auth, createSession);

module.exports = router;