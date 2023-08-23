type Action = {
    label: string
    onClick?: () => void
    variant?: "primary" | "secondary"
    closeOnClick?: boolean
}

export type DialogProps = {
    title: string
    description: string
    actions: Action[]
    isOpen: boolean
    onClose: () => void
}

const ACTION_VARIANTS_CLASS_MAP = {
    primary: "bg-primary text-white hover:bg-primary-light",
    secondary:
        "bg-white dark:bg-secondary text-secondary dark:text-white hover:bg-white-500 dark:hover:bg-secondary-dark",
}

export function Dialog(props: DialogProps) {
    const { title, description, actions, isOpen, onClose } = props

    if (!isOpen) return null

    return (
        <div
            className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-gray-500 bg-opacity-70 transition-opacity"
                aria-hidden="true"
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-md mx-2 bg-white dark:bg-secondary text-secondary dark:text-white rounded-lg shadow-lg overflow-hidden sm:mx-0">
                {/* Modal Content */}
                <div className="px-4 py-4">
                    <div className="text-center">
                        <h3
                            className="text-lg leading-6 font-medium text-primary-dark dark:text-white"
                            id="modal-title"
                        >
                            {title}
                        </h3>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500 dark:text-white">{description}</p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-2">
                        {actions.map((action) => (
                            <button
                                key={action.label}
                                type="button"
                                onClick={() => {
                                    action.onClick?.()
                                    if (action.closeOnClick) {
                                        onClose()
                                    }
                                }}
                                className={`inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark sm:text-sm ${
                                    ACTION_VARIANTS_CLASS_MAP[action.variant || "primary"]
                                }`}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
