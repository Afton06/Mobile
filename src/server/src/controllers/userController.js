// Controller original do boilerplate — mantido como veio, sem alterações.
// Não é usado pelo front do SENSUS hoje, mas fica pronto caso o projeto
// precise de cadastro/login de usuários mais adiante.
const prisma = require("../config/prisma");

async function list(req, res) {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, createdAt: true },
  });
  res.json(users);
}

async function create(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "name, email e password são obrigatórios" });
  }

  const user = await prisma.user.create({
    data: { name, email, password }, // lembre de aplicar hash na senha em produção
  });

  res.status(201).json({ id: user.id, name: user.name, email: user.email });
}

module.exports = { list, create };
