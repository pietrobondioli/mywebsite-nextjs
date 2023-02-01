// React/Next Components
import React, { useContext, useState } from "react"
import { Link as ScrollLink } from "react-scroll"

import { LocaleContext } from "@/contexts/LocaleContext"
import { TerminalUnderslash } from "@/components/TerminalUnderslash"
import { Section } from "@/components/Section"
import useTranslation from "@/hooks/useTranslation"

import styles from "./Header.module.scss"
import headerContent from "./content"

export const Header: React.FC = () => {
    const translate = useTranslation(headerContent)
    const { locale } = useContext(LocaleContext)
    const [terminalCommand, setTerminalCommand] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const timeouts: NodeJS.Timeout[] = []

    const clearTimeouts = () => {
        while (timeouts.length) {
            clearTimeout(timeouts.pop())
        }
    }

    const typingAnimation = (phrase: string) => {
        const letters = phrase.split("")
        setIsTyping(true)

        letters.forEach((letter, index) => {
            timeouts.push(
                setTimeout(() => {
                    setTerminalCommand((lastState) => {
                        return lastState + letter
                    })
                    if (letters.length === index + 1) setIsTyping(false)
                }, 150 * index)
            )
        })
    }

    const callAnimation = () => {
        clearTimeouts()
        setIsTyping(false)
        setTerminalCommand("")
        const phrase = translate("welcomeWebsite")
        timeouts.push(
            setTimeout(() => {
                typingAnimation(phrase)
            }, 3000)
        )
    }

    React.useEffect(() => {
        callAnimation()

        return () => {
            clearTimeouts()
        }
    }, [locale])

    return (
        <Section>
            <div className={styles.header__content}>
                <div className={styles.content__title}>Pietro Bondioli</div>
                <div className={styles.content__terminal}>
                    <div>
                        [pietro@pietro-pc{" "}
                        <span className={styles.terminal__wd}>{translate("myWebsite")}</span>
                        ]$
                    </div>
                    <div className={styles.terminal__command}>
                        {terminalCommand}
                        <TerminalUnderslash isAnimationActive={!isTyping} />
                    </div>
                </div>
            </div>
            <ScrollLink to="presentation" spy={true} smooth={true} className={styles.header__arrow}>
                <div className={styles.arrow__button} />
            </ScrollLink>
        </Section>
    )
}
