import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

const AdminDashboard = () => {
    const { data: session } = useSession()

    if (!session) {
        return (
            <div>
                <h1>Admin Dashboard</h1>
                <p>You are not logged in. Please log in to continue.</p>
                <button onClick={() => signIn()}>Log in</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Welcome, {session.user.name}!</h1>
            <div>
                <h2>Admin Options</h2>
                <ul>
                    <li>
                        <Link href="/admin/containers">Manage Article Containers</Link>
                    </li>
                    <li>
                        <Link href="/admin/languages">Manage Languages</Link>
                    </li>
                </ul>
            </div>
            <button onClick={() => signOut()}>Log out</button>
        </div>
    )
}

export default AdminDashboard
