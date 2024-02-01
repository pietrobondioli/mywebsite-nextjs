import Link from "next/link"
import React from "react"

import styles from "./Logo.module.scss"

export const Logo: React.FC = () => {
    return (
        <Link href="/" className="group cursor-pointer">
            <span
                className={`flex p-2 cursor-pointer w-8 h-8 bg-center bg-no-repeat bg-transparent bg-cover duration-300 pointer-events-auto hover:scale-125 ${styles.navbar__logo}`}
            />
        </Link>
    )
}
