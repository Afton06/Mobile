const prisma = require("../config/prisma");

// Limites usados para recalcular o status da máquina a cada leitura nova
// (mesmos valores mostrados na tela de Configurações do front).
const LIMITS = { vibAlerta: 2.5, vibCritico: 4.0 };

function computeStatus(vib) {
  if (vib >= LIMITS.vibCritico) return "critico";
  if (vib >= LIMITS.vibAlerta) return "alerta";
  return "operando";
}

async function receive(req, res) {
  const { maquina, vibracao } = req.body;

  if (!maquina || vibracao === undefined) {
    return res.status(400).json({ error: "maquina e vibracao são obrigatórios" });
  }

  const machine = await prisma.machine.findUnique({ where: { name: maquina } });
  if (!machine) {
    // Ainda registra a leitura como "órfã" seria ideal ter FK; por ora,
    // só avisa. Cadastre a máquina antes de o ESP32 começar a enviar.
    return res.status(404).json({ error: `Máquina "${maquina}" não cadastrada` });
  }

  const vib = Number(vibracao);

  await prisma.reading.create({ data: { machineId: machine.id, vibracao: vib } });

  const updated = await prisma.machine.update({
    where: { id: machine.id },
    data: { vib, status: computeStatus(vib) },
  });

  res.status(200).json({ sucesso: true, mensagem: "Leitura registrada", dados: updated });
}

module.exports = { receive };
