import { useCallback } from "react"
import useSWR, { mutate } from "swr"
import { PiHandsClapping } from "react-icons/pi"
import { toast } from "react-toastify"

import { addClap, getClapCount, removeClap } from "@/services/api"
import { useSession } from "next-auth/react"
import { useLoginDialogActions } from "@/components/LoginDialog/useLoginDialog"
export type ClapsProps = {
    articleId: string
}

export function Claps(props: ClapsProps) {
    const { articleId } = props

    const { data: session } = useSession()

    const { OPEN } = useLoginDialogActions()

    const clapsKey = `claps/${articleId}`

    const { data: clapData, error } = useSWR(clapsKey, () => getClapCount(articleId), {
        revalidateOnFocus: false,
    })

    const handleAddClap = useCallback(async () => {
        try {
            await addClap(articleId)
            toast.success(`Clap added!`)
        } catch (err) {
            toast.error(`Failed to add clap: ${err}`)
        }
        mutate(clapsKey)
    }, [clapsKey, articleId])

    const handleRemoveClap = useCallback(async () => {
        try {
            await removeClap(articleId)
            toast.success(`Clap removed!`)
        } catch (err) {
            toast.error(`Failed to remove clap: ${err}`)
        }
        mutate(clapsKey)
    }, [clapsKey, articleId])

    const handleAddOrRemoveClap = useCallback(async () => {
        if (!session) {
            OPEN()
            return
        }
        if (clapData?.userClapped) {
            await handleRemoveClap()
        } else {
            await handleAddClap()
        }
    }, [clapData?.userClapped, handleAddClap, handleRemoveClap])

    if (error) {
        return (
            <div className="mt-4 flex items-center gap-2">
                <PiHandsClapping size={24} className="text-gray-400" />
                <span className="font-bold text-gray-600">0</span>
            </div>
        )
    }

    return (
        <div className="mt-4 flex items-center gap-2">
            <PiHandsClapping
                size={24}
                onClick={handleAddOrRemoveClap}
                className={`cursor-pointer transition-colors duration-300 ease-in-out ${
                    clapData?.userClapped
                        ? "text-yellow-400 hover:text-yellow-500"
                        : "text-gray-400 hover:text-gray-500"
                }`}
            />
            <span
                className={`font-bold ${
                    clapData?.userClapped ? "text-yellow-600" : "text-gray-600"
                }`}
            >
                {clapData?.clapCount || 0}
            </span>
        </div>
    )
}