import { NextResponse } from "next/server";

export async function middleware(request) {
  // Check the session using Better Auth's get-session endpoint
  const response = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
    headers: {
      cookie: request.headers.get("cookie") || "",
    },
  });

  const session = await response.json().catch(() => null);

  // If there's no active session, redirect to the login page
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Apply this middleware only to dashboard routes
  matcher: ["/dashboard/:path*"],
};
