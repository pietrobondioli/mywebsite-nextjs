import "i18next"

import common from "public/locales/en-US/common.json"
import about from "public/locales/en-US/about.json"
import articles from "public/locales/en-US/articles.json"
import contact from "public/locales/en-US/contact.json"
import error from "public/locales/en-US/error.json"
import home from "public/locales/en-US/home.json"
import projects from "public/locales/en-US/projects.json"

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
