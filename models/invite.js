// models/Invite.js
const mongoose = require("mongoose");

const inviteSchema = new mongoose.Schema({
  code: { type: String, required: true },
  qrCodeUrl: { type: String, required: true },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  validUntil: { type: Date, required: true },
});

module.exports = mongoose.model("Invite", inviteSchema);
