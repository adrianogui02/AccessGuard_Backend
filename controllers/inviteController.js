const Convite = require("../models/invite");
const qr = require("qrcode");

exports.createInvite = async (req, res) => {
  try {
    const { codigoQR, validoAte, criador, numeroTelefoneConvidado } = req.body;

    // Gera o QR code com base no código do convite
    qr.toDataURL(codigoQR, async (err, url) => {
      if (err) {
        console.error("Error generating QR code:", err);
        return res.status(500).json({ message: "Error generating QR code" });
      }

      // Cria o convite no banco de dados e salva a URL do QR code
      const invite = await Convite.create({
        codigoQR,
        urlQRCode: url,
        validoAte,
        criador,
        numeroTelefoneConvidado,
      });

      // Retorna o convite, incluindo a URL do QR code, como resposta JSON
      res.status(201).json(invite);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para obter um convite por ID
exports.getInviteById = async (req, res) => {
  try {
    const { id } = req.params;
    const invite = await Convite.findById(id);
    if (!invite) {
      return res.status(404).json({ message: "Invite not found" });
    }
    res.json(invite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para obter todos os convites criados por um usuário específico
exports.getInvitesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const invites = await Convite.find({ criador: userId });
    res.json(invites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
