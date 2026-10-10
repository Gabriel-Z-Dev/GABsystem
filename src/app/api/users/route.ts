import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      take: 10,
      include: { patente: true },
    });

    return Response.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: 'Erro ao buscar usuários.',
      },
      { status: 500 }
    );
  }
}
