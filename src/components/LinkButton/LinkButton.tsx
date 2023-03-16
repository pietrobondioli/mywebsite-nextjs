import React from "react"

import { Loading } from "../Loading"

export type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: "primary" | "secondary" | "danger" | "success" | "warning" | "info"
    fullWidth?: boolean
    label?: string
    loading?: boolean
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
}

export const COLOR_CLASS_MAP = {
    primary: `bg-blue-500 hover:bg-blue-600 text-white`,
    secondary: `bg-gray-500 hover:bg-gray-600 text-white`,
    danger: `bg-red-500 hover:bg-red-600 text-white`,
    success: `bg-green-500 hover:bg-green-600 text-white`,
    warning: `bg-yellow-500 hover:bg-yellow-600 text-white`,
    info: `bg-blue-500 hover:bg-blue-600 text-white`,
}

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
    const {
        color = `primary`,
        fullWidth = false,
        label,
        loading = false,
        icon,
        iconPosition = `left`,
        ...linkProps
    } = props

    const colorClass = COLOR_CLASS_MAP[color]
    const fullWidthClass = fullWidth ? `w-full` : ``

    return (
        <a
            className={`${colorClass} ${fullWidthClass} text-base py-2 px-4 flex items-center justify-center gap-2 rounded-sm duration-500 ease-in-out`}
            {...linkProps}
        >
            {loading ? (
                <Loading />
            ) : (
                <>
                    {icon && iconPosition === `left` && icon}
                    {label}
                    {icon && iconPosition === `right` && icon}
                </>
            )}
        </a>
    )
}
