import { GetServerSideProps } from "next"
import { signIn, signOut, useSession } from "next-auth/react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Link from "next/link"

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const translations = await serverSideTranslations(locale ?? `en`, [`common`, `about`])

    return {
        props: {
            ...translations,
        },
    }
}

const AdminDashboard = () => {
    const { data: session } = useSession()

    if (!session || session.user.isAdmin !== true) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md dark:bg-gray-800">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-700 mb-4 dark:text-gray-300">
                        You are not logged in. Please log in to continue.
                    </p>
                    <button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => signIn()}
                    >
                        Log in
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Welcome, {session.user.name}!
                </h1>
                <div className="mt-8">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                        Admin Options
                    </h2>
                    <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                        <li className="py-4 flex items-center justify-between">
                            <Link
                                href="/admin/containers"
                                className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600"
                            >
                                Manage Article Containers
                            </Link>
                        </li>
                        <li className="py-4 flex items-center justify-between">
                            <Link
                                href="/admin/languages"
                                className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600"
                            >
                                Manage Languages
                            </Link>
                        </li>
                        <li className="py-4 flex items-center justify-between">
                            <Link
                                href="/admin/articles"
                                className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600"
                            >
                                Manage Articles
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    className="mt-8 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
                    onClick={() => signOut()}
                >
                    Log out
                </button>
            </div>
        </div>
    )
}

export default AdminDashboard
