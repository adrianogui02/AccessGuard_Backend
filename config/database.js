// config/database.js
const mongoose = require("mongoose");
const dbName = "AccessGuard";
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:zZ3ziDgqeYbnxq2i@walletapi.lsfvt4o.mongodb.net/${dbName}`
    );
    console.log(`Conexão com o MongoDB-${dbName} estabelecida com sucesso`);
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
