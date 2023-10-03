import { useSession } from "next-auth/react"

export const useLoggedUser = () => {
    const { data: session } = useSession()

    return session?.user
}
