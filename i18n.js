const NextI18Next = require('next-i18next').default
const path = require('path')
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const DEFAULT_LOCALE = 'fa'
const supportedLangs = ['en', 'fa']

const domainLocaleMap = {
  localhost: 'fa',
  'abroadexam.com': 'en',
  'abroadexam.ir': 'fa',
}

const domainDetector = {
  name: 'domain',
  lookup(req, res, options) {
    let locale = DEFAULT_LOCALE
    if (typeof window !== 'undefined') {
      console.log('on browser')
      locale = domainLocaleMap[window.location.hostname]
    } else {
      console.log('on server')
      const hostname = req.headers.host?.split(':')[0]
      locale = domainLocaleMap[hostname]
    }
    console.log('found language in domain', locale)
    return locale
  },
}

const pathDetector = {
  name: 'urlpath',
  lookup(req, res, options) {
    let locale = DEFAULT_LOCALE
    if (typeof window !== 'undefined') {
      const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g)
      locale = language[0].replace('/', '')
      const mode = locale === 'fa' ? 'rtl' : 'ltr'
      document.documentElement.setAttribute('data-language', mode)
    } else {
      console.log(req.headers.host || 'not found')
    }
    return locale
  },
}

module.exports = new NextI18Next({
  defaultNS: 'common',
  defaultLanguage: DEFAULT_LOCALE,
  lookupCookie: 'i18next',
  otherLanguages: supportedLangs,
  //   customDetectors: [pathDetector],
  //   detection: {
  //     order: ['urlpath'],
  //   },
  localePath: path.resolve('./public/static/locales'),
  localeSubpaths,
})
