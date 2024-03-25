const mongoose = require("mongoose");

const veiculoSchema = new mongoose.Schema({
  modelo: { type: String, required: true },
  placa: { type: String, required: true, unique: true },
  cor: { type: String },
  proprietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Veiculo = mongoose.model("Veiculo", veiculoSchema);

module.exports = Veiculo;
