import React from "react"
import { useTranslation } from "next-i18next"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"

import { SkillItem } from "./SkillItem"

const SKILL_ITEMS = {
    programming_languages: [
        {
            name: `Typescript`,
            image: `/icons/skills/typescript-32px.png`,
            imageAlt: `Typescript logo.`,
        },
        {
            name: `Java`,
            image: `/icons/skills/java-32px.png`,
            imageAlt: `Java logo.`,
        },
        {
            name: `C#`,
            image: `/icons/skills/csharp-32px.png`,
            imageAlt: `C# logo.`,
        },
        {
            name: `Html`,
            image: `/icons/skills/html-32px.png`,
            imageAlt: `Html logo.`,
        },
        {
            name: `Css`,
            image: `/icons/skills/css-32px.png`,
            imageAlt: `Css logo.`,
        },
        {
            name: `Sql`,
            image: `/icons/skills/sql-db-32px.png`,
            imageAlt: `Sql logo.`,
        },
    ],
    frameworks: [
        {
            name: `Spring Boot`,
            image: `/icons/skills/spring-boot-32px.png`,
            imageAlt: `Spring Boot logo.`,
        },
        {
            name: `.NET Core`,
            image: `/icons/skills/dotnet-32px.png`,
            imageAlt: `.NER core logo.`,
        },
        {
            name: `ReactJS`,
            image: `/icons/skills/react-32px.png`,
            imageAlt: `React.js logo.`,
        },
        {
            name: `NextJS`,
            image: `/icons/skills/nextjs-32px.png`,
            imageAlt: `Next.js logo.`,
        },
        {
            name: `ExpressJS`,
            image: `/icons/skills/express-32px.png`,
            imageAlt: `Express.js logo.`,
        },
    ],
    tools: [
        {
            name: `Linux`,
            image: `/icons/skills/linux-32px.png`,
            imageAlt: `Linux logo.`,
        },
        {
            name: `Git`,
            image: `/icons/skills/git-32px.png`,
            imageAlt: `Git logo.`,
        },
        {
            name: `Docker`,
            image: `/icons/skills/docker-32px.png`,
            imageAlt: `Docker logo.`,
        },
        {
            name: `Kubernetes`,
            image: `/icons/skills/kubernetes-32px.png`,
            imageAlt: `Kubernetes logo.`,
        },
        {
            name: `VScode`,
            image: `/icons/skills/vscode-32px.png`,
            imageAlt: `Visual Studio Code logo.`,
        },
        {
            name: `Figma`,
            image: `/icons/skills/figma-32px.png`,
            imageAlt: `Figma logo.`,
        },
        {
            name: `Vim`,
            image: `/icons/skills/vim-32px.png`,
            imageAlt: `Vim logo.`,
        },
    ],
    others: [
        {
            name: `Azure DevOps`,
            image: `/icons/skills/azure-32px.png`,
            imageAlt: `Heroku logo.`,
        },
        {
            name: `Google APIs`,
            image: `/icons/skills/google-32px.png`,
            imageAlt: `Google logo.`,
        },
        {
            name: `Unit Tests`,
            image: `/icons/skills/unit-test-32px.png`,
            imageAlt: `An image representing unit tests.`,
        },
        {
            name: `NodeJs`,
            image: `/icons/skills/nodejs-32px.png`,
            imageAlt: `Node.js logo.`,
        },
        {
            name: `PostgreSql`,
            image: `/icons/skills/postgresql-32px.png`,
            imageAlt: `PostgreSql logo.`,
        },
        {
            name: `MySql`,
            image: `/icons/skills/mysql-32px.png`,
            imageAlt: `MySql logo.`,
        },
        {
            name: `MongoDB`,
            image: `/icons/skills/mongodb-32px.png`,
            imageAlt: `Mongo db logo.`,
        },
    ],
}

export const Skills: React.FC = () => {
    const { t } = useTranslation(`about`)

    return (
        <Section key={t(`skills.title`)}>
            <SectionTitle title={t(`skills.title`)} />

            {Object.keys(SKILL_ITEMS).map((key) => {
                const skill = key as keyof typeof SKILL_ITEMS
                const content = SKILL_ITEMS[skill]

                return (
                    <div key={t(`skills.sections.${skill}.title`)} className="w-full flex flex-col">
                        <div className="text-xl self-start my-4">
                            {t(`skills.sections.${skill}.title`)}
                        </div>
                        <div className="grid my-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {content.map((skill) => {
                                return (
                                    <SkillItem
                                        key={skill.name}
                                        name={skill.name}
                                        image={skill.image}
                                        imageAlt={skill.imageAlt}
                                    />
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </Section>
    )
}
