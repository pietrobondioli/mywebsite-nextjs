import { PrismaClient } from "@prisma/client"
import { PrismaLibSQL } from "@prisma/adapter-libsql"
import { createClient } from "@libsql/client"

import { env } from "@/env.mjs"

const libsql = createClient({
    url: `${env.TURSO_DATABASE_URL}`,
    authToken: `${env.TURSO_AUTH_TOKEN}`,
})

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter: new PrismaLibSQL(libsql),
        log: env.NODE_ENV === `development` ? [`query`, `error`, `warn`] : [`error`],
    })

if (env.NODE_ENV !== `production`) globalForPrisma.prisma = prisma
