import { useSession } from "next-auth/react"

export const useUserIsAdmin = () => {
    const { data: session } = useSession()

    return !!session?.user.isAdmin
}
