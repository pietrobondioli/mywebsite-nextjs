import { fetchTranslatedSlug } from "@/services/api"
import { useRouter } from "next/router"
const getNextLocale = (currentLocale: string, allLocales: string[]) => {
    const currentIndex = allLocales.indexOf(currentLocale)
    if (currentIndex === -1) return allLocales[0]

    const nextIndex = (currentIndex + 1) % allLocales.length
    return allLocales[nextIndex]
}

export const ChangeLocaleButton: React.FC = () => {
    const router = useRouter()
    const { pathname, query, locales, locale } = router

    const changeTo = getNextLocale(locale ?? `en`, locales ?? [])

    const handleLocaleChange = async () => {
        const slug = query.slug as string

        if (pathname.includes(`/articles/`) && slug && changeTo) {
            let translatedSlug

            try {
                translatedSlug = await fetchTranslatedSlug(slug, changeTo)
            } catch (error) {}

            if (!translatedSlug)
                return router.push(
                    {
                        pathname: `/articles`,
                        query: { ...query },
                    },
                    undefined,
                    { locale: changeTo }
                )

            if (translatedSlug && translatedSlug !== slug) {
                return router.push(
                    {
                        pathname: `/articles/${translatedSlug}`,
                        query: { ...query },
                    },
                    undefined,
                    { locale: changeTo }
                )
            }
        }

        return router.push(
            {
                pathname: pathname,
                query: { ...query },
            },
            undefined,
            { locale: changeTo }
        )
    }

    return (
        <button
            className="h-max w-full py-1 px-2 flex justify-center items-center text-base font-semibold text-center text-black hover:text-primary dark:text-white hover:dark:text-primary-light duration-500 mx-3 lg:text-lg cursor-pointer"
            onClick={handleLocaleChange}
        >
            {locale}
        </button>
    )
}
