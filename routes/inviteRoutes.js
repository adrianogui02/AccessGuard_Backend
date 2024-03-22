// routes/inviteRoutes.js
const express = require("express");
const router = express.Router();
const inviteController = require("../controllers/inviteController.js");

router.post("/invites", inviteController.createInvite);
router.get("/invites/:code", inviteController.getInviteByCode);

module.exports = router;
