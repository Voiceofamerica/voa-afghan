
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import store from 'redux-store'

import * as Dari from './labels/labels.prs'
import * as Pashto from './labels/labels.pus'

setAnalyticsOptions({
  language: 'english',
  languageService: 'english',
  propertyName: 'english',
  propertyId: 'something',
  rsidAccount: 'something',
  reportSuite: 'something',
})

setDirection('ltr')

moment.locale('en-us')

const getCurrentLabels = (): (typeof Dari | typeof Pashto) & Object => {
  const { languageSettings: { primaryLanguage } } = store.getState()
  if (primaryLanguage === 'prs') {
    return Dari
  } else if (primaryLanguage === 'pus') {
    return Pashto
  } else {
    return Dari
  }
}

const labelProxy = new Proxy<typeof Dari>(Dari, {
  has: (target, key) => {
    const labels = getCurrentLabels() || target
    return labels.hasOwnProperty(key)
  },
  get: (target, key) => {
    const labels = getCurrentLabels() || target
    return labels[key]
  },
  set: () => false,
})

export = labelProxy
