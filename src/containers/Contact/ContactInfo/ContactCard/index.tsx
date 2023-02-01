// React/Next Components
import React from "react"

// Styles
import styles from "@/styles/pages/Contact/ContactCard.module.scss"

const ContactInfo = (props) => {
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

export default ContactInfo
