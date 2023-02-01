// React/Next Components
import React from "react"

// External Lib
import { CopyToClipboard } from "react-copy-to-clipboard"

// Translations
import useTranslation from "@/hooks/useTranslation"

// Styles
import styles from "@/styles/pages/Contact/ContactInfo.module.scss"

// Components
import Section from "@/components/Section"
import SectionTitle from "@/components/Section/SectionTitle"

import ContactCard from "./ContactCard"

// Content
import contactInfoContent from "./content"

const sectionContent = {
    "pt-BR": {
        title: "social",
    },
    "en-US": {
        title: "social",
    },
}

const ContactInfo = () => {
    let translate = useTranslation(sectionContent)

    return (
        <Section>
            <SectionTitle title={translate("title")} />
            <div className={styles.contactInfo}>
                {contactInfoContent.map((card) => {
                    translate = useTranslation(card)

                    return (
                        <ContactCard
                            key={card.id}
                            img={card.image}
                            alt={card.imageAlt}
                            cardColor={card.cardColor}
                        >
                            {card.type === "link" && (
                                <a href={card.content} target="blank" className={styles.card__link}>
                                    {card.name}
                                    <br />
                                    <div>{translate("message")}</div>
                                </a>
                            )}
                            {card.type === "copy" && (
                                <CopyToClipboard text={card.content}>
                                    <button type="button" className={styles.card__button}>
                                        {card.content}
                                        <br />
                                        <div>{translate("message")}</div>
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

export default ContactInfo
