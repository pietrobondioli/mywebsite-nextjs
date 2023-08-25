const fs = require("fs")
const { PrismaClient } = require("@prisma/client")
const readline = require("readline")

const prisma = new PrismaClient()

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close()
            resolve(answer)
        })
    })
}

function isArticleData(obj) {
    return (
        typeof obj.name === "string" &&
        Array.isArray(obj.articles) &&
        obj.articles.every((article) =>
            [
                "category",
                "title",
                "slug",
                "excerpt",
                "content",
                "published_at",
                "modified_at",
                "lang",
                "author_name",
                "image_url",
                "image_alt",
            ].every((field) => typeof article[field] === "string")
        )
    )
}

async function createOrUpdateArticle(data) {
    const existingContainer = await prisma.articleContainer.findFirst({
        where: { name: data.name },
    })

    const articlesToCreateOrUpdate = []
    for (const articleData of data.articles) {
        const language = await prisma.language.findUnique({
            where: { code: articleData.lang },
        })

        if (!language) {
            console.log(`Language with code "${articleData.lang}" not found.`)
            continue
        }

        const articlePayload = {
            category: articleData.category,
            title: articleData.title,
            slug: articleData.slug,
            lang_id: language.id,
            excerpt: articleData.excerpt,
            content: articleData.content,
            published_at: new Date(articleData.published_at),
            last_modified: new Date(articleData.modified_at),
            author_name: articleData.author_name,
            image_url: articleData.image_url,
            image_alt: articleData.image_alt,
        }

        articlesToCreateOrUpdate.push(articlePayload)
    }

    if (existingContainer) {
        console.log(`ArticleContainer with name "${data.name}" already exists.`)
        const answer = await askQuestion("Do you want to add new articles? (yes/no) ")
        if (answer.toLowerCase() !== "yes") {
            console.log("Aborted.")
            return
        }

        await prisma.article.createMany({
            data: articlesToCreateOrUpdate.map((article) => ({
                ...article,
                containerId: existingContainer.id,
            })),
        })
    } else {
        await prisma.articleContainer.create({
            data: {
                name: data.name,
                articles: {
                    create: articlesToCreateOrUpdate,
                },
            },
        })
    }

    console.log("Operation completed successfully.")
}

function readJsonFile(path) {
    try {
        const rawData = fs.readFileSync(path, "utf-8")
        return JSON.parse(rawData)
    } catch (error) {
        console.error("Error reading or parsing the file:", error)
        process.exit(1)
    }
}

const path = process.argv[2]
if (!path) {
    console.error("Please provide a path to the article data JSON file.")
    process.exit(1)
}

const articleData = readJsonFile(path)

if (isArticleData(articleData)) {
    createOrUpdateArticle(articleData)
        .catch((e) => {
            console.error("Error:", e)
        })
        .finally(() => {
            prisma.$disconnect()
        })
} else {
    console.error("The provided JSON does not match the expected format.")
}
