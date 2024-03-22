// routes/index.js
const express = require("express");
const userRoutes = require("./usersRoutes");
const inviteRoutes = require("./inviteRoutes");
// Importe outras rotas conforme necessário

const router = express.Router();

// Use as rotas do usuário
//router.use("/users", userRoutes);
router.use("/invite", inviteRoutes);
// Use outras rotas conforme necessário

module.exports = router;
