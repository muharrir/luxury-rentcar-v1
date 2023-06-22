import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export default function Middleware(request) {
  const token = Cookies.get("token");
  console.log(token);

  if (request.nextUrl.pathname === "/settings") {
    if (!token) {
      return NextResponse.redirect("/login");
    }
  }

  return NextResponse.next();
}
