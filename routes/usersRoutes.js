const express = require("express");
const router = express.Router();
const UserController = require("../controllers/usersController");

// Rota para criar um novo usuário
router.post("/user", UserController.createUser);

// Rota para listar todos os usuários
router.get("/user", UserController.getAllUsers);

// Rota para obter detalhes de um usuário específico por ID
router.get("/user/:id", UserController.getUserById);

// Rota para atualizar os detalhes de um usuário
router.put("/user/:id", UserController.updateUser);

// Rota para excluir um usuário
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;
