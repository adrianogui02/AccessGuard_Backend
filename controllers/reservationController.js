const Reservation = require("../models/reservation");

// Criar nova reserva
exports.createReservation = async (req, res) => {
  const { user, location, date, time } = req.body;
  try {
    const newReservation = new Reservation({
      user,
      location,
      date,
      time,
    });
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Buscar todas as reservas
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate("user");
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Buscar uma reserva específica
exports.getReservationById = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await Reservation.findById(id).populate("user");
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Buscar uma reserva específica com o usuario
exports.getReservationByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const reservation = await Reservation.find({ user: userId });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Atualizar uma reserva
exports.updateReservation = async (req, res) => {
  const { id } = req.params;
  const { location, date, time } = req.body;
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      {
        location,
        date,
        time,
      },
      { new: true }
    );
    if (!updatedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Deletar uma reserva
exports.deleteReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Reservation.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.status(204).send(); // No Content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
