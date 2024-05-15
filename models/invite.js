const mongoose = require("mongoose");

const conviteSchema = new mongoose.Schema({
  codigoQR: { type: String, required: true },
  urlQRCode: { type: String, required: true },
  validoAte: { type: Date, required: true },
  criadoEm: { type: Date, default: Date.now },
  criador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  nomeConvidado: { type: String },
  numeroTelefoneConvidado: { type: String },
  ativo: { type: Boolean, default: true }, // Indica se o convite está ativo
  uuid: { type: String, required: true },
});

const Convite = mongoose.model("Convite", conviteSchema);

module.exports = Convite;
