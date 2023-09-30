import { z } from "zod"

const articleSchema = z.object({
    slug: z.string(),
    category: z.string(),
    lang_id: z.string(),
    title: z.string(),
    published_at: z
        .string()
        .transform((value) => new Date(value))
        .optional(),
    last_modified: z
        .string()
        .transform((value) => new Date(value))
        .optional(),
    author_name: z.string(),
    excerpt: z.string().max(500),
    image_url: z.string().url(),
    image_alt: z.string(),
    content: z.string(),
    article_container_id: z.string(),
    clapCount: z.number().int().nonnegative().optional(),
    is_published: z.boolean().optional(),
})
type ArticleSchemaType = z.infer<typeof articleSchema>

export { articleSchema }
export type { ArticleSchemaType }
