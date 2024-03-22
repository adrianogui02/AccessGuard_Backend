// server.js
const express = require("express");
const connectDB = require("./config/database");
const routes = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB
connectDB();

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Utilizar as rotas definidas
app.use("/api", routes);

// Iniciar o servidor
const server = app.listen(PORT, () => {
  const serverUrl = `http://localhost:${PORT}`;
  console.log(`Server is running on ${serverUrl}`);
});
