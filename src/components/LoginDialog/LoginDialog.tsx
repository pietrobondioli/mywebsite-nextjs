import { useIsLoginDialogOpen, useLoginDialogActions } from "./useLoginDialog"
import React from "react"
import { Dialog } from "@/components/Dialog"
import { signIn } from "next-auth/react"
import router from "next/router"

export function LoginDialog() {
    const isOpen = useIsLoginDialogOpen()

    const { CLOSE } = useLoginDialogActions()

    return (
        <Dialog
            isOpen={isOpen}
            onClose={() => CLOSE()}
            title="Login required"
            description="Please login to reply"
            actions={[
                {
                    label: `Login`,
                    onClick: () => signIn(),
                    variant: `primary`,
                    closeOnClick: true,
                },
                {
                    label: `Cancel`,
                    variant: `secondary`,
                    closeOnClick: true,
                },
            ]}
        />
    )
}
