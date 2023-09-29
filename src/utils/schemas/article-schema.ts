import { z } from "zod"

const articleSchema = z.object({
    slug: z.string(),
    category: z.string(),
    lang_id: z.string(),
    title: z.string(),
    published_at: z.date().optional(),
    last_modified: z.date().optional(),
    author_name: z.string(),
    excerpt: z.string().max(500),
    image_url: z.string().url(),
    image_alt: z.string(),
    content: z.string(),
    article_container_id: z.string(),
    clapCount: z.number().int().nonnegative().optional(),
    is_published: z.boolean().optional(),
})

export default articleSchema
