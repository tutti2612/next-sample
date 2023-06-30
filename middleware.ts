import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DOMAIN_DOCTOR = "doctor.hoge.com";
const DOMAIN_BUSINESS = "business.hoge.com";

export function middleware(request: NextRequest) {
  switch (request.nextUrl.hostname) {
    case DOMAIN_DOCTOR:
      return NextResponse.rewrite(new URL("/login-doctor", request.url));
    case DOMAIN_BUSINESS:
      return NextResponse.rewrite(new URL("/login-business", request.url));
  }
}

export const config = {
  matcher: "/login",
};
