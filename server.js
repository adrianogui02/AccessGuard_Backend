// server.js
const express = require("express");
const connectDB = require("./config/database");
const routes = require("./routes/index");
const { OAuth2Client } = require("google-auth-library");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Conectar ao MongoDB
connectDB();

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());
app.use(cors());

const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "postmessage"
);

app.post("/auth/google", async (req, res) => {
  const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
  console.log(tokens);
  console.log("Req auth sucesso");
  res.json(tokens);
});

app.post("/auth/google/refresh-token", async (req, res) => {
  const user = new UserRefreshClient(
    clientId,
    clientSecret,
    req.body.refreshToken
  );
  const { credentials } = await user.refreshAccessToken(); // optain new tokens
  res.json(credentials);
});

// Utilizar as rotas definidas
app.use("/api", routes);

// Iniciar o servidor
const server = app.listen(PORT, () => {
  const serverUrl = `http://localhost:${PORT}`;
  console.log(`Server is running on ${serverUrl}`);
});
