const prisma = require("../config/prisma");

async function list(req, res) {
  const machines = await prisma.machine.findMany({ orderBy: { id: "asc" } });
  res.json(machines);
}

async function getById(req, res) {
  const id = Number(req.params.id);
  const machine = await prisma.machine.findUnique({ where: { id } });
  if (!machine) return res.status(404).json({ error: "Máquina não encontrada" });
  res.json(machine);
}

module.exports = { list, getById };
