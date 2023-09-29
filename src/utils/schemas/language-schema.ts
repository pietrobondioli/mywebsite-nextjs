import { z } from "zod"

const createLanguageSchema = z.object({
    code: z.string().min(2, "Code should have at least 2 characters"),
    name: z.string().min(1, "Name should not be empty"),
})
type CreateLanguageSchemaType = z.infer<typeof createLanguageSchema>

const updateLanguageSchema = createLanguageSchema.deepPartial()
type UpdateLanguageSchemaType = z.infer<typeof updateLanguageSchema>

export { createLanguageSchema, updateLanguageSchema }
export type { CreateLanguageSchemaType, UpdateLanguageSchemaType }
