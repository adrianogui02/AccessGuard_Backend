const mongoose = require("mongoose");

const moradorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String },
  celular: { type: String, required: true },
  foto: { type: String }, // Salva o caminho da imagem no servidor
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Morador = mongoose.model("Morador", moradorSchema);

module.exports = Morador;
