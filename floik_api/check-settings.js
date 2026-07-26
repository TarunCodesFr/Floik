const { PrismaClient } = require('./src/generated/prisma');
const prisma = new PrismaClient();

async function check() {
  try {
    const settings = await prisma.portalSettings.findUnique({ where: { id: 'singleton' } });
    console.log('Settings:', JSON.stringify(settings, null, 2));
  } catch (e) {
    console.error('Check failed:', e);
  }
}

check().catch(console.error).finally(() => prisma.$disconnect());
