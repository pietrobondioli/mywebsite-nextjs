import React from "react"

export type LoadingProps = {
    size?: "small" | "medium" | "large"
    label?: string
}

export const SIZE_CLASS_MAP = {
    small: `w-4 h-4`,
    medium: `w-6 h-6`,
    large: `w-8 h-8`,
}

export const Loading: React.FC<LoadingProps> = (props) => {
    const { size = `medium`, label } = props

    return (
        <div
            className="flex h-full w-full items-center justify-center gap-4"
            data-testid="egp-loading"
        >
            <div
                className={`animate-spin rounded-full border-4 border-solid border-blue-400 border-t-transparent ${SIZE_CLASS_MAP[size]}`}
                data-testid="spin"
            />
            {label && (
                <span className="animate-pulse text-xl font-semibold text-gray-700">{label}</span>
            )}
        </div>
    )
}
