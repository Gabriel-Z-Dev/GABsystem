import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const ranks = [
    { nome: 'Fundador', sigla: 'FND', pesoComando: 1000 },
    { nome: 'Coronel', sigla: 'Cmt', pesoComando: 900 },
    { nome: 'Tenente-Coronel', sigla: 'TC', pesoComando: 850 },
    { nome: 'Major', sigla: 'Maj', pesoComando: 800 },
    { nome: 'Capitão', sigla: 'Cap', pesoComando: 700 },
    { nome: '1º Tenente', sigla: '1º Ten', pesoComando: 650 },
    { nome: '2º Tenente', sigla: '2º Ten', pesoComando: 600 },
    { nome: 'Sargento', sigla: 'Sgt', pesoComando: 500 },
    { nome: 'Cabo', sigla: 'Cbo', pesoComando: 400 },
    { nome: 'Soldado', sigla: 'Sd', pesoComando: 300 },
    { nome: 'Cadete', sigla: 'Cdt', pesoComando: 200 },
  ];

  for (const rank of ranks) {
    await prisma.rank.upsert({
      where: { nome: rank.nome },
      update: {},
      create: rank,
    });
  }

  const permissions = [
    { chave: 'op:create', descricao: 'Criar operações geração de OPORD' },
    { chave: 'op:edit', descricao: 'Editar operações existentes' },
    { chave: 'op:delete', descricao: 'Excluir operações' },
    { chave: 'efetivo:view', descricao: 'Visualizar quadro de efetivo' },
    { chave: 'efetivo:edit', descricao: 'Editar cadastro de efetivo' },
    { chave: 'g1:manage', descricao: 'Gerenciar registros G-1 e disciplina' },
    { chave: 'g2:view', descricao: 'Acessar inteligência e mapas' },
    { chave: 'g3:assign', descricao: 'Agendar e administrar missões' },
    { chave: 'g4:logistics', descricao: 'Aprovar kits e logística' },
    { chave: 'g5:publish', descricao: 'Publicar boletins e webhooks' },
    { chave: 'audit:view', descricao: 'Visualizar auditoria' },
    { chave: 'owner:override', descricao: 'Override absoluto do sistema' },
  ];

  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: { chave: permission.chave },
      update: {},
      create: permission,
    });
  }

  const founderRank = await prisma.rank.findUnique({ where: { nome: 'Fundador' } });
  const ownerDiscordId = process.env.OWNER_DISCORD_ID || 'owner-discord-id';

  if (founderRank) {
    const owner = await prisma.user.upsert({
      where: { discordId: ownerDiscordId },
      update: {
        nomeGuerra: 'The Overlord',
        avatarUrl: 'https://cdn.discordapp.com/embed/avatars/0.png',
        patenteId: founderRank.id,
        isOwner: true,
        secaoEstadoMaior: 'G-5',
      },
      create: {
        discordId: ownerDiscordId,
        nomeGuerra: 'The Overlord',
        avatarUrl: 'https://cdn.discordapp.com/embed/avatars/0.png',
        patenteId: founderRank.id,
        isOwner: true,
        secaoEstadoMaior: 'G-5',
        assiduidade: 100,
      },
    });

    console.log(`Owner seeded: ${owner.nomeGuerra} (${owner.discordId})`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
