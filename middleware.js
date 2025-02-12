import { NextResponse } from "next/server";
import { headers } from "next/headers";

let isLoggedIn = false;

export function middleware(request) {
  // const headersList = headers();
  // const domain = headersList.get("host");
  // const cookie = request.cookies.get("l");

  const auth = request.nextUrl.searchParams.get("key");
  const cookie = request.cookies.get("auth");
  const url = request.url;
  const path = request.nextUrl.pathname;
  if (path=='/api'||path=='/api/admin/login'||path=='/api/upload'||path=='/api/admin/appointment') {
  if (auth == process.env.key) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }
}
else if(path=='/admin'||path=='/admin/view-appointments'){
  if (cookie) {
    
  if (cookie.value==process.env.key) {
    isLoggedIn = true;
  } 
  else {
    isLoggedIn = 'login'
  }
}
else {
  isLoggedIn = 'login'
}
}

  if (isLoggedIn == true) {
    isLoggedIn=false;
    return NextResponse.next();
  }
  else if(isLoggedIn=='login'){
    console.log('success');
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  else {
    
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/api","/admin",'/api/admin/login', '/api/upload','/api/admin/appointment', '/admin/view-appointments']

};
