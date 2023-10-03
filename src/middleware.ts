import { NextResponse } from "next/server"

const CORS_ALLOWED_ORIGINS = process.env.CORS_ALLOWED_ORIGINS ?? "*"

export function middleware() {
    const res = NextResponse.next()

    res.headers.append("Access-Control-Allow-Credentials", "true")
    res.headers.append("Access-Control-Allow-Origin", CORS_ALLOWED_ORIGINS)
    res.headers.append("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT")
    res.headers.append(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    )

    console.log(CORS_ALLOWED_ORIGINS)

    return res
}

export const config = {
    matcher: "/api/:path*",
}
