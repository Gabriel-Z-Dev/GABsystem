import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      status: 'online',
      service: 'gab-c2-api',
      timestamp: new Date().toISOString(),
    },
  });
}
