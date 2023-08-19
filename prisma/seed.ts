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
        { code: `en`, name: `English` },
        { code: `es`, name: `Español` },
        { code: `pt`, name: `Português` },
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
    const articlesForLanguage = 5
    const languages = await prisma.language.findMany()
    const categories = [`Tech`, `Health`, `Business`]

    for (const category of categories) {
        for (let i = 0; i < articlesForLanguage; i++) {
            for (const language of languages) {
                await prisma.article.create({
                    data: {
                        slug: `${category}-${i}-${language.name}${faker.lorem.slug()}`,
                        lang_id: language.id,
                        title: `${category}-${i}-${language.name}${faker.lorem.sentence()}`,
                        published_at: faker.date.past(),
                        last_modified: faker.date.recent(),
                        author_name: `Pietro Bondioli`,
                        excerpt: faker.lorem.paragraph(),
                        image_url: faker.image.url(),
                        image_alt: faker.lorem.words(3),
                        content: faker.lorem.paragraphs(5),
                        category: category,
                    },
                })
            }
        }
    }
}

async function seedSlugTranslations() {
    const languages = await prisma.language.findMany()
    const articles = await prisma.article.findMany()

    // A set to track articles that have already been targeted
    const targetedArticles = new Set()

    // A map to track source articles and their corresponding targets
    const sourceToTargetMap = new Map()

    for (const article of articles) {
        for (const language of languages) {
            if (language.id !== article.lang_id) {
                let targetArticle

                // Check if the article was previously targeted, if so, use the source as the target
                if (sourceToTargetMap.has(article.id + `_` + language.id)) {
                    targetArticle = sourceToTargetMap.get(article.id + `_` + language.id)
                } else {
                    // Find the next available article in the target language
                    targetArticle = await prisma.article.findFirst({
                        where: {
                            category: article.category,
                            lang_id: language.id,
                            NOT: {
                                id: {
                                    in: Array.from(targetedArticles),
                                },
                            },
                        },
                    })

                    if (targetArticle) {
                        targetedArticles.add(targetArticle.id)
                        sourceToTargetMap.set(targetArticle.id + `_` + article.lang_id, article)
                    }
                }

                if (targetArticle) {
                    await prisma.slugTranslation.create({
                        data: {
                            sourceSlug: article.slug,
                            targetSlug: targetArticle.slug,
                            sourceLang_id: article.lang_id,
                            targetLang_id: language.id,
                            article_id: article.id,
                        },
                    })
                }
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
