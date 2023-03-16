import "i18next"

import common from "../locales/en-US/common.json"
import about from "../locales/en-US/about.json"
import articles from "../locales/en-US/articles.json"
import contact from "../locales/en-US/contact.json"
import error from "../locales/en-US/error.json"
import home from "../locales/en-US/home.json"
import projects from "../locales/en-US/projects.json"

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: "en-US"
        resources: {
            common: typeof common
            about: typeof about
            articles: typeof articles
            contact: typeof contact
            error: typeof error
            home: typeof home
            projects: typeof projects
        }
    }
}
