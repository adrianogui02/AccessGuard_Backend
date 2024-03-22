// controllers/InviteController.js
const Invite = require("../models/invite.js");
const qr = require("qrcode"); // Importa a biblioteca qrcode

exports.createInvite = async (req, res) => {
  try {
    const { code, createdBy, validUntil } = req.body;

    // Gera o QR code com base no código do convite
    qr.toDataURL(code, async (err, url) => {
      if (err) {
        console.error("Error generating QR code:", err);
        return res.status(500).json({ message: "Error generating QR code" });
      }

      // Cria o convite no banco de dados e salva a URL do QR code
      const invite = await Invite.create({
        code,
        createdBy,
        validUntil,
        qrCodeUrl: url,
      });

      // Retorna o convite, incluindo a URL do QR code, como resposta JSON
      res.json(invite);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getInviteByCode = async (req, res) => {
  try {
    const { code } = req.params;
    const invite = await Invite.findOne({ code });
    if (!invite) {
      return res.status(404).json({ message: "Invite not found" });
    }
    res.json(invite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
