const prisma = require("../config/prisma");

async function list(req, res) {
  const alerts = await prisma.alert.findMany({
    orderBy: { createdAt: "desc" },
    include: { machine: { select: { name: true } } },
  });

  // formato pronto pro front (mesmo shape que o mock antigo usava)
  const shaped = alerts.map((a) => ({
    id: a.id,
    machine: a.machine.name,
    level: a.level,
    label: a.label,
    message: a.message,
    sensor: a.sensor,
    when: a.createdAt,
  }));

  res.json(shaped);
}

module.exports = { list };
