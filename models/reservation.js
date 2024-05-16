const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Supõe que você tem um modelo User já definido
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adiciona automaticamente campos para createdAt e updatedAt
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
