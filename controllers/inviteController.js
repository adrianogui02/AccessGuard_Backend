const Convite = require("../models/invite");
const qr = require("qrcode");
const { v4: uuidv4 } = require("uuid"); // Importa a função para gerar UUID

exports.createInvite = async (req, res) => {
  try {
    const { validoAte, criador, numeroTelefoneConvidado, nomeConvidado } =
      req.body;

    const uuid = uuidv4(); // Gera um UUID para o convite
    const baseQRCodeURL = "https://accessguard.vercel.app/QRCode/Success/";
    const fullQRCodeURL = baseQRCodeURL + uuid; // URL completa para o QR code

    // Gera o QR code com o URL completo
    qr.toDataURL(fullQRCodeURL, async (err, url) => {
      if (err) {
        console.error("Error generating QR code:", err);
        return res.status(500).json({ message: "Error generating QR code" });
      }

      // Cria o convite no banco de dados
      const invite = await Convite.create({
        uuid,
        codigoQR: fullQRCodeURL, // Salva o URL completo no campo codigoQR
        urlQRCode: url,
        validoAte,
        criador,
        nomeConvidado,
        numeroTelefoneConvidado,
        ativo: true,
      });

      res.status(201).json(invite);
    });
  } catch (error) {
    console.error("Failed to create invite:", error);
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

exports.getInviteByUUID = async (req, res) => {
  try {
    const { uuid } = req.params;
    const convite = await Convite.findOne({ uuid: uuid });
    if (!convite) {
      return res.status(404).json({ message: "Convite não encontrado." });
    }
    res.json(convite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.desactiveInvite = async (req, res) => {
  try {
    const { uuid } = req.params;

    // Atualiza o status no banco de dados
    const updated = await Convite.findOneAndUpdate(
      { uuid: uuid }, // Filtro para encontrar o documento
      { ativo: false }, // Campos para atualizar
      { new: true } // Opção para retornar o documento atualizado
    );

    if (!updated) {
      return res.status(404).send({ message: "Convite não encontrado!" });
    }

    res.send({ message: "QR Code desativado com sucesso!", convite: updated });
  } catch (error) {
    console.error("Erro ao desativar QR Code:", error);
    res.status(500).send({ error: "Erro ao desativar QR Code" });
  }
};
