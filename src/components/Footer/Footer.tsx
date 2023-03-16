import React from "react"

import styles from "./Footer.module.scss"

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer__text}>
                Pietro Bondioli <span className={styles.footer__text_separator} />
                {` `}
                <a
                    className={styles.footer__link}
                    href="https://opensource.org/licenses/MIT"
                    target="_blank"
                    rel="noreferrer"
                >
                    Copyright (c) 2021 MIT
                </a>
            </p>
            <div className={styles.footer__icons}>
                <a href="https://github.com/bondiolipietro" target="_blank" rel="noreferrer">
                    <div className={`${styles.footer__icon} ${styles.github}`} />
                </a>
                <a
                    href="https://www.linkedin.com/in/pietrobondioli/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className={`${styles.footer__icon} ${styles.linkedin}`} />
                </a>
            </div>
        </footer>
    )
}
