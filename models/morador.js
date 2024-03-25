const mongoose = require("mongoose");

const moradorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String },
  relacionamento: { type: String }, // Por exemplo, 'Familiar', 'Amigo', etc.
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Morador = mongoose.model("Morador", moradorSchema);

module.exports = Morador;
