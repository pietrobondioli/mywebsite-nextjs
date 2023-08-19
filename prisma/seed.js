const { PrismaClient } = require(`@prisma/client`)
const { faker } = require(`@faker-js/faker`)

const prisma = new PrismaClient()

async function seedUsers() {
    const numberOfUsers = 40
    const users = Array.from({ length: numberOfUsers }, () => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        emailVerified: faker.date.past(),
        image: faker.image.avatar(),
    }))
    await prisma.user.createMany({ data: users })
}

async function seedLanguages() {
    const languageData = [
        { code: `en`, name: `English` },
        { code: `es`, name: `Español` },
        { code: `pt`, name: `Português` },
    ]

    await prisma.language.createMany({ data: languageData })
}

async function seedAccounts() {
    const users = await prisma.user.findMany()
    const accountTypes = [`personal`, `business`, `other`]
    const providers = [`google`, `facebook`, `twitter`, `github`]

    const accounts = users.map((user) => ({
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
    }))

    await prisma.account.createMany({ data: accounts })
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
            const articleContainer = await prisma.articleContainer.create({
                data: {
                    name: `${category} ${i} container ${faker.lorem.sentence()}`,
                },
            })

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
                        article_container_id: articleContainer.id,
                    },
                })
            }
        }
    }
}

async function seedComments() {
    const users = await prisma.user.findMany()
    const articles = await prisma.article.findMany()

    for (const article of articles) {
        const numberOfComments = faker.number.int({ min: 0, max: 10 })

        for (let i = 0; i < numberOfComments; i++) {
            const user = faker.helpers.arrayElement(users)

            await prisma.comment.create({
                data: {
                    content: faker.lorem.sentences(),
                    article_id: article.id,
                    author_id: user.id,
                    created_at: faker.date.recent(),
                    // Add logic for nested replies here if desired
                },
            })
        }
    }
}

async function main() {
    console.log(`Start seeding ...`)
    await Promise.all([
        seedUsers(),
        seedLanguages(),
        seedAccounts(),
        seedSessions(),
        seedVerificationTokens(),
    ])

    await seedArticles()
    await seedComments()

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
