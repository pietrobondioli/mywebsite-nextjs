import { z } from "zod"

const createArticleContainerSchema = z.object({
    name: z.string().min(1, "Name should not be empty"),
})
type CreateArticleContainerSchemaType = z.infer<typeof createArticleContainerSchema>

const updateArticleContainerSchema = createArticleContainerSchema.deepPartial()
type UpdateArticleContainerSchemaType = z.infer<typeof updateArticleContainerSchema>

export { createArticleContainerSchema, updateArticleContainerSchema }
export type { CreateArticleContainerSchemaType, UpdateArticleContainerSchemaType }
