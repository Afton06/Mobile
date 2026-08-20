// Popula o banco com as 4 máquinas e os alertas de exemplo, pra você já
// ter dados reais assim que rodar "npm run prisma:seed".
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.reading.deleteMany();
  await prisma.alert.deleteMany();
  await prisma.machine.deleteMany();

  const colheitadeira = await prisma.machine.create({
    data: {
      name: "Colheitadeira X9", model: "John Deere X9 1100", status: "operando",
      temp: 88, tempMax: 120, vib: 2.4, vibMax: 5, rpm: 72, oil: 3.2,
      belt: "NORMAL", filtro: 82, horimetro: "2.847 h",
    },
  });
  const trator = await prisma.machine.create({
    data: {
      name: "Trator 8R 410", model: "John Deere 8R 410", status: "alerta",
      temp: 92, tempMax: 120, vib: 3.1, vibMax: 5, rpm: 65, oil: 2.8,
      belt: "ATENCAO", filtro: 68, horimetro: "4.120 h",
    },
  });
  await prisma.machine.create({
    data: {
      name: "Plantadeira ExactEmerge", model: "John Deere DB60", status: "operando",
      temp: 75, tempMax: 120, vib: 1.8, vibMax: 5, rpm: 58, oil: 3.4,
      belt: "NORMAL", filtro: 90, horimetro: "1.560 h",
    },
  });
  const pulverizador = await prisma.machine.create({
    data: {
      name: "Pulverizador R4045", model: "John Deere R4045", status: "critico",
      temp: 95, tempMax: 120, vib: 4.6, vibMax: 5, rpm: 80, oil: 2.1,
      belt: "CRITICO", filtro: 55, horimetro: "3.298 h",
    },
  });

  await prisma.alert.createMany({
    data: [
      { machineId: trator.id, level: "atencao", label: "Atenção",
        message: "Temperatura acima de 90°C detectada no motor principal. Verifique o sistema de arrefecimento.",
        sensor: "Sensor TMP-02" },
      { machineId: pulverizador.id, level: "critico", label: "Crítico",
        message: "Vibração excessiva detectada no eixo traseiro. Possível folga nos parafusos de fixação.",
        sensor: "Sensor VIB-05" },
      { machineId: colheitadeira.id, level: "resolvido", label: "Resolvido",
        message: "Pressão do óleo voltou ao nível normal após troca de filtro.",
        sensor: "Sensor OIL-01" },
      { machineId: trator.id, level: "info", label: "Info",
        message: "Manutenção preventiva recomendada em 50 horas de operação.",
        sensor: "Sistema" },
    ],
  });

  console.log("✅ Seed concluído.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
