import { NextResponse } from "next/server";
import { headers } from "next/headers";

let isLoggedIn = false;

export function middleware(request) {
  // const headersList = headers();
  // const domain = headersList.get("host");
  // const cookie = request.cookies.get("l");

  const auth = request.nextUrl.searchParams.get("key");

  if (auth == process.env.key) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  if (isLoggedIn) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/api"],
};
