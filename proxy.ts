import { NextRequest, NextResponse } from "next/server";
import { userService } from "./src/services/user.service";
import { Roles } from "./src/constants/roles";

export async function proxy (request : NextRequest) {

  const pathname = request.nextUrl.pathname;

  let isAuthenticated = false;
  let role = null;
  const {data} = await userService.getSession();
  // console.log(data);
  // console.log(data.user.role);

  if(data){
    isAuthenticated = true;
    role = data.user.role
  }
  if(!isAuthenticated){
    return NextResponse.redirect( new URL("/login",request.url) );
  }
  if(role===Roles.admin && (pathname.startsWith('/dashboard') || pathname.startsWith('/seller') || pathname.startsWith('/customer') ) ){
    return NextResponse.redirect( new URL("/admin",request.url) );
  }
  else if(role===Roles.seller && (pathname.startsWith('/dashboard') || pathname.startsWith('/admin') || pathname.startsWith('/dashboard') ) ){
    return NextResponse.redirect( new URL("/seller/dashboard",request.url) );
  }
  else if(role===Roles.customer && (pathname.startsWith('/dashboard') || pathname.startsWith('/admin') || pathname.startsWith('/seller') ) ){
    return NextResponse.redirect( new URL("/cart", request.url) )
  }

  return NextResponse.next();
}

export const config = {
  matcher : ['/dashboard',
    '/dashboard/:path*',
    '/cart',
    '/admin',
    '/admin/:path*',
    '/seller',
    '/seller/:path*',
    '/customer',
    '/customer/:path*']
}