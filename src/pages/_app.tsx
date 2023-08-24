import React from "react"
import Head from "next/head"
import { appWithTranslation } from "next-i18next"
import { ToastContainer } from "react-toastify"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { type AppType } from "next/app"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Theme } from "@/containers/Theme"

import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.scss"
import { LoginDialog } from "@/components/LoginDialog"

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
                <meta httpEquiv="content-type" content="text/html" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="HandheldFriendly" content="True" />
                <meta httpEquiv="content-language" content="pt, en" />
                <meta name="author" content="Pietro Bondioli" />
                <meta name="creator" content="Pietro Bondioli" />
                <meta name="robots" content="index, follow" />
                <meta property="og:site_name" content="Pietro Bondioli" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="google-site-verification"
                    content="6m8-QuB3vOo-b-V4kOc1lSgrfKvGVHxLVQDN6UWY6fE"
                />
            </Head>
            <SessionProvider session={session}>
                <ToastContainer />
                <Theme>
                    <LoginDialog />
                    <div className="min-h-svh flex flex-col justify-between">
                        <Navbar />
                        <div className="grow">
                            <Component {...pageProps} />
                        </div>
                        <Footer />
                    </div>
                </Theme>
            </SessionProvider>
        </>
    )
}

export default appWithTranslation(MyApp)
