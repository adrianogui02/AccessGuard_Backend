const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String },
  endereco: { type: String },
  fotoPerfil: { type: String }, // URL da foto de perfil
});

const User = mongoose.model("User", userSchema);

module.exports = User;
