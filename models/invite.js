const mongoose = require("mongoose");

const conviteSchema = new mongoose.Schema({
  codigoQR: { type: String, required: true },
  urlQRCode: { type: String, required: true }, // URL que leva ao QR code
  validoAte: { type: Date, required: true },
  criadoEm: { type: Date, default: Date.now }, // Data de criação do convite
  criador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  nomeConvidado: { type: String }, // Número de telefone da pessoa convidada
  numeroTelefoneConvidado: { type: String },
  validade: { type: Boolean },
  uuid: { type: String, required: true }, // Adiciona o campo UUID
});

const Convite = mongoose.model("Convite", conviteSchema);

module.exports = Convite;
