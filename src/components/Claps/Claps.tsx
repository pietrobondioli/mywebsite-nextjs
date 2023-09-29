import { useCallback } from "react"
import { PiHandsClapping } from "react-icons/pi"
import { toast } from "react-toastify"
import useSWR, { mutate } from "swr"

import { addClap, getClapCount } from "@/services/api"
export type ClapsProps = {
    articleId: string
}

export function Claps(props: ClapsProps) {
    const { articleId } = props

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
                onClick={handleAddClap}
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
