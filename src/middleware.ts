import { NextRequest, NextResponse } from "next/server"

import { fetchTranslatedSlug } from "@/services/api"

export async function middleware(req: NextRequest) {
    const pathParts = req.nextUrl.pathname.split(`/`)

    const shouldCheckSlug = req.nextUrl.searchParams.get(`checkSlug`)

    if (shouldCheckSlug && pathParts.includes(`articles`)) {
        const slug = pathParts[2]
        const targetLangCode = req.nextUrl.searchParams.get(`targetLang`)

        if (!slug || !targetLangCode) {
            return NextResponse.next()
        }

        let translatedSlug

        try {
            translatedSlug = await fetchTranslatedSlug(slug, targetLangCode)
        } catch (error) {}

        if (translatedSlug && translatedSlug !== slug) {
            return NextResponse.redirect(
                `${req.nextUrl.origin}/${targetLangCode}/articles/${translatedSlug}`
            )
        }
    }

    return NextResponse.next()
}
