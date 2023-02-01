// React/Next Components
import Head from "next/head"

// Hooks
import useTranslation from "@/hooks/useTranslation"

// Components
import Header from "@/containers/HomePage/Header"
import Presentation from "@/containers/HomePage/Presentation"

// Contents
const indexContent = {
    "pt-BR": {
        pageDescription:
            "Eu criei este website para ser um local onde eu posso melhor apresentar meu trabalho e habilidades, e também compartilhar meus conhecimentos, pensamentos e ideias.",
    },
    "en-US": {
        pageDescription:
            "I created this website with the intention of being a place where I can better present my work and skills, ando also share my knowledge, thoughts and ideas.",
    },
}

function HomePage() {
    const translate = useTranslation(indexContent)

    return (
        <>
            <Head>
                <title>Pietro Bondioli</title>
                <meta name="description" content={translate("pageDescription")} />
            </Head>
            <main>
                <Header />
                <Presentation />
            </main>
        </>
    )
}

export default HomePage
