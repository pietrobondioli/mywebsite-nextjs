import React from "react"

import styles from "./ContactCard.module.scss"

export type ContactCardProps = {
    img: string
    alt: string
    cardColor: string
    children: React.ReactNode
}

export const ContactCard: React.FC<ContactCardProps> = (props) => {
    const { img, alt, cardColor, children } = props

    return (
        <div className={styles.card}>
            <div className={styles.card__front} style={{ backgroundColor: cardColor }}>
                <img src={img} className={styles.image} alt={alt} />
            </div>
            <div className={styles.card__content}>{children}</div>
        </div>
    )
}
