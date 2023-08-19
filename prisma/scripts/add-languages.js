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

function isLanguageData(obj) {
    return (
        Array.isArray(obj) &&
        obj.every(
            (language) => typeof language.code === "string" && typeof language.name === "string"
        )
    )
}

async function addLanguages(languages) {
    for (const language of languages) {
        const existingLanguage = await prisma.language.findUnique({
            where: { code: language.code },
        })

        if (existingLanguage) {
            console.log(`Language with code "${language.code}" already exists.`)
            const answer = await askQuestion(
                `Do you want to overwrite the existing language with code "${language.code}"? (yes/no) `
            )
            if (answer.toLowerCase() === "yes") {
                await prisma.language.update({
                    where: { code: language.code },
                    data: language,
                })
                console.log(`Language with code "${language.code}" has been updated.`)
            } else {
                console.log(`Skipped adding language with code "${language.code}".`)
            }
        } else {
            await prisma.language.create({
                data: language,
            })
            console.log(`Added language with code "${language.code}".`)
        }
    }
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
    console.error("Please provide a path to the language data JSON file.")
    process.exit(1)
}

const languageData = readJsonFile(path)

if (isLanguageData(languageData)) {
    addLanguages(languageData)
        .catch((e) => {
            console.error("Error:", e)
        })
        .finally(() => {
            prisma.$disconnect()
        })
} else {
    console.error("The provided JSON does not match the expected format.")
}
