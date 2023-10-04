import { Analytics } from "@vercel/analytics/react"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { appWithTranslation, withTranslation } from "next-i18next"
import { type AppType } from "next/app"
import Head from "next/head"
import { ToastContainer } from "react-toastify"

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Theme } from "@/containers/Theme"

import { LoginDialog } from "@/components/LoginDialog"
import "@/styles/globals.scss"
import "react-toastify/dist/ReactToastify.css"

import nextI18NextConfig from "../../next-i18next.config"

export type OpenGraphData =
    | {
          property: string
          content: string
          key: string
      }
    | {
          name: string
          content: string
          key: string
      }

const MyApp: AppType<{ session: Session | null; openGraphData: OpenGraphData[] }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    const { openGraphData = [] } = pageProps

    return (
        <>
            <Head>
                {openGraphData.map((og) => (
                    <meta {...og} />
                ))}
                <link
                    rel="shortcut icon"
                    href={`${process.env.NEXT_PUBLIC_SITE_URL}/assets/icons/favicon.ico`}
                />
                <meta httpEquiv="content-type" content="text/html" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="HandheldFriendly" content="True" />
                <meta httpEquiv="content-language" content="pt, en, es" />
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
                <Analytics />
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

export default appWithTranslation(withTranslation("common")(MyApp), nextI18NextConfig)
