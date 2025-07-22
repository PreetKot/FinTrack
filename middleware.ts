// Temporarily disable middleware to isolate the issue
// This will allow all routes to be accessed without authentication
// Only use this for debugging purposes

import { NextResponse } from 'next/server';

export function middleware(request) {
  // For now, just pass through all requests
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*).*)", "/"],
};