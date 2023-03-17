import React from "react"
import { Link as ScrollLink } from "react-scroll"
import { useTranslation } from "next-i18next"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

import { TerminalUnderslash } from "@/components/TerminalUnderslash"
import { Section } from "@/components/Section"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"

export const Header: React.FC = () => {
    const { t } = useTranslation(`home`)

    const { animatedText, isTyping } = useTypingAnimation({
        text: t(`header.welcomeWebsite`),
        resetAfter: 3000,
    })

    return (
        <Section stretchToViewportHeight>
            <div className="self-end flex flex-col items-center justify-center text-base lg:text-xl text-center">
                <div>Pietro Bondioli</div>
                <div className="flex items-center justify-around text-primary dark:text-primary-light gap-2 flex-col lg:flex-row">
                    <div>
                        [pietro@pietro-pc{` `}
                        <span className="text-black dark:text-white">{t(`header.myWebsite`)}</span>
                        ]$
                    </div>
                    <div className="text-black dark:text-white">
                        {animatedText}
                        <TerminalUnderslash isAnimationActive={!isTyping} />
                    </div>
                </div>
            </div>
            <ScrollLink to="presentation" spy={true} smooth={true} className="w-full self-end">
                <MdOutlineKeyboardArrowDown className="box-content text-5xl animate-bounce m-auto cursor-pointer p-2" />
            </ScrollLink>
        </Section>
    )
}
