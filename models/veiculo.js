const mongoose = require("mongoose");

const veiculoSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  licensePlate: { type: String, required: true, unique: true },
  year: { type: String, required: true },
  color: { type: String, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Veiculo = mongoose.model("Vehicle", veiculoSchema);

module.exports = Veiculo;
