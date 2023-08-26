import { signIn, getProviders, ClientSafeProvider } from "next-auth/react"
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { ReactNode } from "react"
import { FaGithub, FaDiscord, FaGoogle } from "react-icons/fa"
import { authOptions } from "@/server/auth"
import { getServerSession } from "next-auth"

interface SignInButtonProps {
    onClick: () => void
    icon: ReactNode
    backgroundColor: string
    color?: string
    children: ReactNode
}

function SignInButton({
    onClick,
    icon,
    backgroundColor,
    color = "white",
    children,
}: SignInButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center px-4 py-2 rounded w-full ${backgroundColor} text-${color} space-x-2`}
        >
            {icon}
            <span>{children}</span>
        </button>
    )
}

type SignInProps = {
    providers?: Record<string, ClientSafeProvider>
}

type ProviderName = "GITHUB" | "DISCORD" | "GOOGLE" | "DEFAULT"

export const getServerSideProps: GetServerSideProps<SignInProps> = async (context) => {
    const session = await getServerSession(context.req, context.res, authOptions)

    if (session) {
        if (context.query.callbackUrl) {
            return {
                redirect: {
                    destination: context.query.callbackUrl as string,
                    permanent: false,
                },
                props: {},
            }
        }

        return { redirect: { destination: "/" }, props: {} }
    }

    const { locale, locales } = context

    const translations = await serverSideTranslations(
        locale ?? `en`,
        [`common`, `error`],
        null,
        locales
    )

    console.log(translations)

    const providersData = await getProviders()
    const providers = providersData || {}

    return {
        props: {
            providers,
            ...translations,
        },
    }
}

const SignIn: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
    const { providers } = props

    const PROVIDERS_ICONS_MAP: Record<ProviderName, JSX.Element> = {
        GITHUB: <FaGithub />,
        DISCORD: <FaDiscord />,
        GOOGLE: <FaGoogle />,
        DEFAULT: <span></span>,
    }

    const PROVIDERS_BG_MAP: Record<ProviderName, string> = {
        GITHUB: "bg-gray-800",
        DISCORD: "bg-indigo-600",
        GOOGLE: "bg-red-600",
        DEFAULT: "bg-gray-500",
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-200 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 dark:text-white">Sign In</h1>

                <div className="space-y-4">
                    {providers
                        ? Object.values(providers).map((provider) => {
                              const providerNameUppercase = provider.name.toUpperCase()
                              const icon =
                                  PROVIDERS_ICONS_MAP[providerNameUppercase as ProviderName] ||
                                  PROVIDERS_ICONS_MAP.DEFAULT
                              const bgColor =
                                  PROVIDERS_BG_MAP[providerNameUppercase as ProviderName] ||
                                  PROVIDERS_BG_MAP.DEFAULT

                              return (
                                  <SignInButton
                                      key={provider.name}
                                      onClick={() => signIn(provider.id)}
                                      icon={icon}
                                      backgroundColor={bgColor}
                                  >
                                      Sign in with {provider.name}
                                  </SignInButton>
                              )
                          })
                        : null}
                </div>
            </div>
        </div>
    )
}

export default SignIn
