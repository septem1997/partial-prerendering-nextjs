import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// the following code is taken from : https://nextjs.org/docs/advanced-features/middleware#setting-headers
export function middleware(request: NextRequest) {
  console.log('middleware', {
    // @ts-ignore
    pathname: request.nextUrl.pathname,
    search: request.nextUrl.search,
  });
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-search', request.nextUrl.search);

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });
  return response;
}

// the following code has been copied from https://nextjs.org/docs/advanced-features/middleware#matcher
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/',
  ],
};
