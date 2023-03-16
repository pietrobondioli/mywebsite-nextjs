import React, { useCallback, useEffect, useMemo, useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { useTranslation } from "next-i18next"

import { TerminalUnderslash } from "@/components/TerminalUnderslash"
import { Section } from "@/components/Section"

import styles from "./Header.module.scss"

export const Header: React.FC = () => {
    const { t } = useTranslation(`home`)
    const [terminalCommand, setTerminalCommand] = useState(``)
    const [isTyping, setIsTyping] = useState(false)
    const timeouts: NodeJS.Timeout[] = useMemo(() => [], [])

    const clearTimeouts = useCallback(() => {
        while (timeouts.length) {
            clearTimeout(timeouts.pop())
        }
    }, [timeouts])

    const typingAnimation = useCallback(
        (phrase: string) => {
            const letters = phrase.split(``)
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
        },
        [timeouts]
    )

    const callAnimation = useCallback(() => {
        clearTimeouts()
        setIsTyping(false)
        setTerminalCommand(``)
        const phrase = t(`header.welcomeWebsite`)
        timeouts.push(
            setTimeout(() => {
                typingAnimation(phrase)
            }, 3000)
        )
    }, [clearTimeouts, t, timeouts, typingAnimation])

    useEffect(() => {
        callAnimation()

        return () => {
            clearTimeouts()
        }
    }, [callAnimation, clearTimeouts])

    return (
        <Section>
            <div className={styles.header__content}>
                <div className={styles.content__title}>Pietro Bondioli</div>
                <div className={styles.content__terminal}>
                    <div>
                        [pietro@pietro-pc{` `}
                        <span className={styles.terminal__wd}>{t(`header.myWebsite`)}</span>
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
