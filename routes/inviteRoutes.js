// routes/inviteRoutes.js
const express = require("express");
const router = express.Router();
const inviteController = require("../controllers/inviteController.js");

router.post("/create", inviteController.createInvite);
router.get("/getById/:id", inviteController.getInviteById);
router.get("/getByUser/:userId", inviteController.getInvitesByUser);
router.get("/getByUUID/:uuid", inviteController.getInviteByUUID);
router.post("/desactive/:uuid", inviteController.desactiveInvite);

module.exports = router;
