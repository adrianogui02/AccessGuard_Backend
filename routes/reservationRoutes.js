// routes/inviteRoutes.js
const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.post("/create", reservationController.createReservation);
router.get("/getByUser/:userId", reservationController.getReservationByUser);
router.delete("/delete/:id", reservationController.deleteReservation);

module.exports = router;
