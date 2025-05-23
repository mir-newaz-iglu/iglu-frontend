import {NextResponse} from "next/server";
import { auth } from "@/auth"

const protectedRoutes = ["/dashboard", "/profile"]
const authPageRoutes = ["/login"]
const apiAuthPrefix = "/api/auth"


export default auth((req) => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;

    const path = nextUrl.pathname;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isProtectedRoute = protectedRoutes.includes(path)
    const isAuthPageRoute = authPageRoutes.includes(path)

    if (isApiAuthRoute){
        return NextResponse.next();
    }

    if (isProtectedRoute && !isLoggedIn)
    {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

if (isLoggedIn && isAuthPageRoute){
    return NextResponse.redirect(new URL("/account/dashboard", req.nextUrl));
}

    return NextResponse.next();
})

export const config = {
    matcher: ["/((?!api/_next/static|_next/image|favicon.ico).*)"],
}