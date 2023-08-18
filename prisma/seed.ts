const { PrismaClient } = require(`@prisma/client`)
const { faker } = require(`@faker-js/faker`)

const prisma = new PrismaClient()

async function seedUsers() {
    const numberOfUsers = 40

    for (let i = 0; i < numberOfUsers; i++) {
        await prisma.user.create({
            data: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                emailVerified: faker.date.past(),
                image: faker.image.avatar(),
            },
        })
    }
}

async function seedLanguages() {
    const languageData = [
        { code: `en-US`, name: `English` },
        { code: `es-ES`, name: `Español` },
        { code: `pt-BR`, name: `Português` },
    ]

    for (const lang of languageData) {
        await prisma.language.create({
            data: lang,
        })
    }
}

async function seedAccounts() {
    const users = await prisma.user.findMany()
    const accountTypes = [`personal`, `business`, `other`]
    const providers = [`google`, `facebook`, `twitter`, `github`]

    for (const user of users) {
        await prisma.account.create({
            data: {
                userId: user.id,
                type: faker.helpers.arrayElement(accountTypes),
                provider: faker.helpers.arrayElement(providers),
                providerAccountId: faker.string.uuid(),
                refresh_token: faker.string.uuid(),
                refresh_token_expires_in: faker.number.int(3600),
                access_token: faker.string.uuid(),
                expires_at: faker.number.int(3600),
                token_type: `Bearer`,
                scope: `read`,
                id_token: faker.string.uuid(),
                session_state: faker.string.uuid(),
            },
        })
    }
}

async function seedSessions() {
    const users = await prisma.user.findMany()

    for (const user of users) {
        await prisma.session.create({
            data: {
                userId: user.id,
                sessionToken: faker.string.uuid(),
                expires: faker.date.future(),
            },
        })
    }
}

async function seedVerificationTokens() {
    const users = await prisma.user.findMany()

    for (const user of users) {
        if (!user.email) continue // skip users without email

        await prisma.verificationToken.create({
            data: {
                identifier: user.email,
                token: faker.string.uuid(),
                expires: faker.date.future(),
            },
        })
    }
}

async function seedArticles() {
    const languages = await prisma.language.findMany()
    const categories = [`Tech`, `Lifestyle`, `Travel`, `Health`, `Business`] // Sample categories

    for (const language of languages) {
        await prisma.article.create({
            data: {
                slug: faker.lorem.slug(),
                lang_id: language.id,
                title: faker.lorem.sentence(),
                published_at: faker.date.past(),
                last_modified: faker.date.recent(),
                author_name: `Pietro Bondioli`,
                excerpt: faker.lorem.paragraph(),
                image_url: faker.image.url(),
                image_alt: faker.lorem.words(3),
                content: faker.lorem.paragraphs(5),
                category: faker.helpers.arrayElement(categories),
            },
        })
    }
}

async function seedSlugTranslations() {
    const articles = await prisma.article.findMany()
    const languages = await prisma.language.findMany()

    for (const article of articles) {
        const sourceLang = await prisma.language.findUnique({ where: { id: article.lang_id } })
        for (const targetLang of languages) {
            if (sourceLang?.id && targetLang.id !== sourceLang.id) {
                await prisma.slugTranslation.create({
                    data: {
                        sourceSlug: article.slug,
                        targetSlug: faker.lorem.slug(),
                        sourceLang_id: sourceLang?.id,
                        targetLang_id: targetLang.id,
                        article_id: article.id,
                    },
                })
            }
        }
    }
}

async function main() {
    console.log(`Start seeding ...`)
    await seedUsers()
    await seedLanguages()
    await seedAccounts()
    await seedSessions()
    await seedVerificationTokens()
    await seedArticles()
    await seedSlugTranslations()
    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
