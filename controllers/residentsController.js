const Morador = require("../models/morador");

exports.addResident = async (req, res) => {
  try {
    const { nome, email, celular, usuario, foto } = req.body;
    const novoMorador = await Morador.create({
      nome,
      email,
      celular,
      foto,
      usuario,
    });

    res.status(201).json(novoMorador);
  } catch (error) {
    res.status(400).send(error);
  }
};
// Obter lista de moradores
exports.getResidentsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const moradores = await Morador.find({ usuario: userId });
    res.json(moradores);
  } catch (error) {
    res.status(500).send(error);
  }
};
// Atualizar um morador
exports.updateResident = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    if (req.file) {
      updates.foto = req.file.path;
    }
    const moradorAtualizado = await Morador.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!moradorAtualizado) {
      return res.status(404).send();
    }
    res.send(moradorAtualizado);
  } catch (error) {
    res.status(400).send(error);
  }
};
// Deletar um morador
exports.deleteResident = async (req, res) => {
  try {
    const { id } = req.params;
    const moradorDeletado = await Morador.findByIdAndDelete(id);
    if (!moradorDeletado) {
      return res.status(404).send();
    }
    res.send(moradorDeletado);
  } catch (error) {
    res.status(500).send(error);
  }
};
