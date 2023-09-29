import { z } from "zod"

const createLanguageSchema = z.object({
    code: z.string().min(2, "Code should have at least 2 characters"),
    name: z.string().min(1, "Name should not be empty"),
})

const updateLanguageSchema = createLanguageSchema.deepPartial()

export { createLanguageSchema, updateLanguageSchema }
