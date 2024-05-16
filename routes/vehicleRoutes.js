// routes/inviteRoutes.js
const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.post("/create", vehicleController.createVehicle);
router.get("/getByUser/:userId", vehicleController.getVehicleByUser);
router.delete("/delete/:id", vehicleController.deleteVehicle);

module.exports = router;
