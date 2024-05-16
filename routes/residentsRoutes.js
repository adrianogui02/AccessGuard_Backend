// routes/inviteRoutes.js
const express = require("express");
const router = express.Router();
const residentsController = require("../controllers/residentsController");

router.post("/create", residentsController.addResident);
router.get("/getByUser/:userId", residentsController.getResidentsByUser);
router.get("/getAllResidents", residentsController.getAllResidents);

module.exports = router;
