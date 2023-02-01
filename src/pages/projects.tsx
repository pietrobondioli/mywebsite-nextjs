import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { NextPage } from "next"

import useTranslation from "@/hooks/useTranslation"
import { Projects as ProjectsSection } from "@/containers/Projects"

const projectsContent = {
    "pt-BR": {
        pageTitle: "Projetos - Pietro Bondioli",
        pageDescription:
            "Aqui você pode ver alguns projetos dos quais eu participei ou fui criador.",
    },
    "en-US": {
        pageTitle: "Projects - Pietro Bondioli",
        pageDescription: "Here you can take a look at some projects I created or participated.",
    },
}

const Projects: NextPage = () => {
    const router = useRouter()
    const translate = useTranslation(projectsContent)

    return (
        <>
            <Head>
                <title>{translate("pageTitle")}</title>
                <meta name="description" content={translate("pageDescription")} />
                <meta property="og:title" content={translate("pageTitle")} />
                <meta property="og:description" content={translate("pageDescription")} />
                <meta property="og:url" content={`pietrobondioli.com.br${router.asPath}`} />
                <meta name="twitter:title" content={translate("pageTitle")} />
                <meta name="twitter:description" content={translate("pageDescription")} />
            </Head>
            <main>
                <ProjectsSection />
            </main>
        </>
    )
}

export default Projects
