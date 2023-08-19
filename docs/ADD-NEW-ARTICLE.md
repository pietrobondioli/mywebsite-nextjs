# How to add a new article using script

## Setup dev db

Read more [here](./LOCAL-DEV-DB.md).

## Create a new article json

```bash
{
    "name": "Example article name",
    "articles": [
        {
            "category": "Example category",
            "title": "Example article title",
            "slug": "example-article-slug",
            "excerpt": "Example article excerpt",
            "content": "Example article content",
            "published_at": "2019-01-01T00:00:00.000Z",
            "modified_at": "2019-01-01T00:00:00.000Z",
            "lang": "en",
            "author_name": "Pietro Bondioli",
            "image_url": "https://example.com/image.jpg",
            "image_alt": "Example image alt text"
        },
        {
            "category": "Example category-pt",
            "title": "Example article title -pt",
            "slug": "example-article-slug-pt",
            "excerpt": "Example article excerpt-pt",
            "content": "Example article content-pt",
            "published_at": "2019-01-01T00:00:00.000Z",
            "modified_at": "2019-01-01T00:00:00.000Z",
            "lang": "pt",
            "author_name": "Pietro Bondioli",
            "image_url": "https://example.com/image-pt.jpg",
            "image_alt": "Example image alt text-pt"
        },
        {
            "category": "Example category-es",
            "title": "Example article title -es",
            "slug": "example-article-slug-es",
            "excerpt": "Example article excerpt-es",
            "content": "Example article content-es",
            "published_at": "2019-01-01T00:00:00.000Z",
            "modified_at": "2019-01-01T00:00:00.000Z",
            "lang": "es",
            "author_name": "Pietro Bondioli",
            "image_url": "https://example.com/image-es.jpg",
            "image_alt": "Example image alt text-es"
        }
    ]
}
```

## Run the script

```bash
npm run add-article -- ./prisma/scripts/example_article.json
```

Congratulations! You have added a new article to the db!

## Notes

-   If you want to add a new article to prod db just change the connection string in `.env` file and run the script.
