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
    primary: `bg-primary hover:bg-primary-dark text-white`,
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
            className={`${colorClass} ${fullWidthClass} text-base py-2 px-4 flex items-center justify-center gap-2 rounded-sm shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-900 focus:ring-white-500 hover:scale-110 transition-transform duration-200`}
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
