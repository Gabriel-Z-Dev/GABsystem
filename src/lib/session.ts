import { getServerSession as nextGetServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function getServerSession() {
  return nextGetServerSession(authOptions);
}

export async function requireSession() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect('/auth/signin');
  }

  return session;
}

export async function requireOwnerSession() {
  const session = await requireSession();
  const ownerId = process.env.OWNER_DISCORD_ID;

  if (!ownerId || (session.user as { discordId?: string })?.discordId !== ownerId) {
    redirect('/');
  }

  return session;
}
