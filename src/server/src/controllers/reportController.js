const prisma = require("../config/prisma");

// Relatório simples calculado a partir dos dados reais (máquinas + alertas).
// Troque/expanda quando quiser métricas mais elaboradas (ex.: agrupar
// Reading por dia para montar o gráfico de barras de verdade).
async function get(req, res) {
  const periodo = req.query.periodo || "diario";

  const [machines, alertsCount] = await Promise.all([
    prisma.machine.findMany(),
    prisma.alert.count(),
  ]);

  const ativas = machines.filter((m) => m.status !== "critico").length;
  const eficiencia = machines.length ? Math.round((ativas / machines.length) * 100) : 0;

  res.json({
    periodo,
    stats: { eficiencia: `${eficiencia}%`, horas: "—", alertas: alertsCount },
    chartLabel: "Frota — dados reais",
    bars: [], // preencha agrupando Reading por dia/semana quando tiver histórico suficiente
    items: [],
  });
}

module.exports = { get };
