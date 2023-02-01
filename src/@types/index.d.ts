export {}

declare global {
    type ArticleMetadata = {
        slug?: string
        title?: string
        published?: string
        publishedHumanReadable?: string
        lastModified?: string
        author?: string
        excerpt?: string
        image?: string
        imageAlt?: string
        twitterProfile?: string
    }

    type Article = {
        content: string
        metadata: ArticleMetadata
    }
}
