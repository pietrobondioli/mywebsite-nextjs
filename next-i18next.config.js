const path = require("path")

/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["en", "pt", "es"],
    },
    react: { useSuspense: false },
    reloadOnPrerender: process.env.NODE_ENV === "development",
    localePath: path.resolve("./public/locales"),
}
