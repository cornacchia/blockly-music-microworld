const _ = require('lodash')
const i18nIt = require('./i18nIt.json')

function i18n (path, lang) {
  if (lang === 'it-IT') {
    return _.get(i18nIt, path)
  }
}

module.exports = i18n
