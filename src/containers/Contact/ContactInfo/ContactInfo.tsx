import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useTranslation } from "next-i18next"

import { Section } from "@/components/Section"
import { SectionTitle } from "@/components/Section/SectionTitle"

import styles from "./ContactInfo.module.scss"
import { ContactCard } from "./ContactCard"

const INFO_CARDS = {
    linkedin: {
        type: `link`,
        image: `/icons/contact/linkedin-128px.png`,
        imageAlt: `Linkedin logo.`,
        cardColor: `#80d8ff`,
        name: `linkedin/pietrobondioli`,
        content: `https://www.linkedin.com/in/pietrobondioli`,
    },
    github: {
        type: `link`,
        image: `/icons/contact/github-black-128px.png`,
        imageAlt: `Github logo.`,
        cardColor: `#7c7c7c`,
        name: `github/bondiolipietro`,
        content: `https://github.com/bondiolipietro`,
    },
    gmail: {
        type: `copy`,
        image: `/icons/contact/gmail-128px.png`,
        imageAlt: `Gmail logo.`,
        cardColor: `#ff8a80`,
        name: `gmail/pietrobondioli`,
        content: `pietrobondiolideveloper@gmail.com`,
    },
}

export const ContactInfo: React.FC = () => {
    const { t } = useTranslation(`contact`)

    return (
        <Section>
            <SectionTitle title={t(`info.title`)} />
            <div className={styles.contactInfo}>
                {Object.keys(INFO_CARDS).map((key) => {
                    const card = key as keyof typeof INFO_CARDS
                    const content = INFO_CARDS[card]

                    return (
                        <ContactCard
                            key={card}
                            img={content.image}
                            alt={content.imageAlt}
                            cardColor={content.cardColor}
                        >
                            {content.type === `link` && (
                                <a
                                    href={content.content}
                                    target="blank"
                                    className={styles.card__link}
                                >
                                    {content.name}
                                    <br />
                                    <div>{t(`info.cards.${card}.message`)}</div>
                                </a>
                            )}
                            {content.type === `copy` && (
                                <CopyToClipboard text={content.content}>
                                    <button type="button" className={styles.card__button}>
                                        {content.content}
                                        <br />
                                        <div>{t(`info.cards.${card}.message`)}</div>
                                    </button>
                                </CopyToClipboard>
                            )}
                        </ContactCard>
                    )
                })}
            </div>
        </Section>
    )
}
