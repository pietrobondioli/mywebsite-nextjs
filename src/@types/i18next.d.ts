import "i18next"

import common from "public/locales/en/common.json"
import about from "public/locales/en/about.json"
import articles from "public/locales/en/articles.json"
import contact from "public/locales/en/contact.json"
import error from "public/locales/en/error.json"
import home from "public/locales/en/home.json"
import projects from "public/locales/en/projects.json"

declare module "i18next" {
    interface CustomTypeOptions {
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
