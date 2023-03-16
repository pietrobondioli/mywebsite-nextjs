import React from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import "@/styles/main.scss"

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <meta httpEquiv="content-type" content="text/html" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="content-language" content="pt, en" />
                <meta name="author" content="Pietro Bondioli" />
                <meta name="creator" content="Pietro Bondioli" />
                <meta name="robots" content="index, follow" />
                <meta property="og:site_name" content="Pietro Bondioli" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@bondioli_pietro" />
                <meta name="twitter:creator" content="@bondioli_pietro" />
                <meta
                    name="google-site-verification"
                    content="6m8-QuB3vOo-b-V4kOc1lSgrfKvGVHxLVQDN6UWY6fE"
                />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default appWithTranslation(MyApp)
