import { z } from "zod"

const createArticleContainerSchema = z.object({
    name: z.string().min(1, "Name should not be empty"),
})

const updateArticleContainerSchema = createArticleContainerSchema.deepPartial()

export { createArticleContainerSchema, updateArticleContainerSchema }
