import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protectedRoutes = ['/', '/c2-root-override'];

  if (protectedRoutes.includes(pathname)) {
    const hasSession = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token');

    if (!hasSession) {
      const url = new URL('/auth/signin', request.url);
      return NextResponse.redirect(url);
    }
  }

  if (pathname.startsWith('/c2-root-override')) {
    const ownerHash = request.cookies.get('gab-owner-access');
    if (!ownerHash) {
      const url = new URL('/auth/signin', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/c2-root-override'],
};
