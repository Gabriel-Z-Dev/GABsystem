import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const counts = await Promise.all([
      prisma.user.count(),
      prisma.operacao.count(),
      prisma.rank.count(),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        usuarios: counts[0],
        operacoes: counts[1],
        patentes: counts[2],
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Falha ao consultar estatísticas do sistema.',
      },
      { status: 500 }
    );
  }
}
