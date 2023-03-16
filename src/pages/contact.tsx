import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticProps, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { ContactForm } from "@/containers/Contact/ContactForm"
import { ContactInfo } from "@/containers/Contact/ContactInfo"

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const translations = await serverSideTranslations(locale || ``, [`common`, `contact`])

    return {
        props: {
            ...translations,
        },
    }
}

const Contact: NextPage = () => {
    const router = useRouter()
    const { t } = useTranslation()

    return (
        <>
            <Head>
                <title>{t(`pageTitle`)}</title>
                <meta name="description" content={t(`pageDescription`)} />
                <meta property="og:title" content={t(`pageTitle`)} />
                <meta property="og:description" content={t(`pageDescription`)} />
                <meta property="og:url" content={`pietrobondioli.com.br${router.asPath}`} />
                <meta name="twitter:title" content={t(`pageTitle`)} />
                <meta name="twitter:description" content={t(`pageDescription`)} />
            </Head>
            <main>
                <ContactForm />
                <ContactInfo />
            </main>
        </>
    )
}

export default Contact
