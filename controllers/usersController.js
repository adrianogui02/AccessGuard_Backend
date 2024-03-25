const User = require("../models/usuario");

// Função para criar um novo usuário
exports.createUser = async (req, res) => {
  try {
    const { nome, email, telefone, endereco, fotoPerfil } = req.body;
    const newUser = await User.create({
      nome,
      email,
      telefone,
      endereco,
      fotoPerfil,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para listar todos os usuários
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para obter detalhes de um usuário específico por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para atualizar os detalhes de um usuário
exports.updateUser = async (req, res) => {
  try {
    const { nome, email, telefone, endereco, fotoPerfil } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { nome, email, telefone, endereco, fotoPerfil },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para excluir um usuário
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
