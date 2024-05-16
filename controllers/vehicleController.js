const Vehicle = require("../models/veiculo");

// Criar nova reserva
exports.createVehicle = async (req, res) => {
  const { owner, brand, model, licensePlate, year, color } = req.body;
  try {
    const newVehicle = new Vehicle({
      owner,
      brand,
      model,
      licensePlate,
      year,
      color,
    });
    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Buscar todas as reservas
exports.getAllVehicles = async (req, res) => {
  try {
    const reservations = await Vehicle.find().populate("owner");
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Buscar uma reserva específica
exports.getVehicleById = async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await Vehicle.findById(id).populate("owner");
    if (!reservation) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Buscar uma reserva específica com o usuario
exports.getVehicleByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const reservation = await Vehicle.find({ owner: userId });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Atualizar uma reserva
exports.updateVehicle = async (req, res) => {
  const { id } = req.params;
  const { location, date, time } = req.body;
  try {
    const updatedReservation = await Vehicle.findByIdAndUpdate(
      id,
      {
        location,
        date,
        time,
      },
      { new: true }
    );
    if (!updatedReservation) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Deletar uma reserva
exports.deleteVehicle = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Vehicle.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.status(204).send(); // No Content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
