import React from "react"

import { Loading } from "../Loading"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        color = `primary`,
        fullWidth = false,
        label,
        loading = false,
        icon,
        iconPosition = `left`,
        ...buttonProps
    } = props

    const colorClass = COLOR_CLASS_MAP[color]
    const fullWidthClass = fullWidth ? `w-full` : ``

    return (
        <button
            className={`${colorClass} ${fullWidthClass} text-base py-2 px-4 flex items-center justify-center gap-2 rounded-sm duration-500 ease-in-out`}
            type="button"
            {...buttonProps}
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
        </button>
    )
}
