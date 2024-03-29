import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { type GetServerSidePropsContext } from "next"
import { getServerSession, type DefaultSession, type NextAuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

import { env } from "@/env.mjs"
import { prisma } from "@/server/db"

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultSession["user"] & {
            id: string
            isAdmin: boolean
        }
    }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
    callbacks: {
        session: async ({ session, user }) => {
            const dbUser = await prisma.user.findUnique({ where: { id: user.id } })

            if (!dbUser) {
                throw new Error("User not found in database")
            }

            return {
                ...session,
                user: {
                    ...session.user,
                    id: dbUser.id,
                    isAdmin: dbUser.isAdmin,
                },
            }
        },
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: env.DISCORD_CLIENT_ID,
            clientSecret: env.DISCORD_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = async (ctx: {
    req: GetServerSidePropsContext["req"]
    res: GetServerSidePropsContext["res"]
}) => {
    const session = await getServerSession(ctx.req, ctx.res, authOptions)

    if (!session) return null

    return session.user
}
