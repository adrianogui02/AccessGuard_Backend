// routes/inviteRoutes.js
const express = require("express");
const router = express.Router();
const inviteController = require("../controllers/inviteController.js");

router.post("/create", inviteController.createInvite);
router.get("/getById/:id", inviteController.getInviteById);
router.get("/getByUser/:userId", inviteController.getInvitesByUser);

module.exports = router;
