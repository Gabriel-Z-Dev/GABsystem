export async function GET() {
  return {
    success: true,
    data: {
      title: 'GAB C2',
      status: 'online',
      env: process.env.NODE_ENV || 'development',
    },
  };
}
