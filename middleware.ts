import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const cookies = request.cookies;
  const token = !!cookies.get("accessToken");

  // if (token && url.pathname.startsWith("/login")) {
  //   return NextResponse.redirect(new URL("/dashboard", url));
  // }
  // if (!token && url.pathname.startsWith("/dashboard")) {
  //   return NextResponse.redirect(new URL("/login", url));
  // }
}