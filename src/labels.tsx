
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import store from 'redux-store'

import * as AfaanOromo from './labels/labels.om'
import * as Amharic from './labels/labels.am'
import * as Tigrinya from './labels/labels.ti'

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

const getCurrentLabels = (): (typeof AfaanOromo | typeof Amharic | typeof Tigrinya) & Object => {
  const { languageSettings: { primaryLanguage } } = store.getState()
  if (primaryLanguage === 'om') {
    return AfaanOromo
  } else if (primaryLanguage === 'am') {
    return Amharic
  } else if (primaryLanguage === 'ti') {
    return Tigrinya
  } else {
    return AfaanOromo
  }
}

const labelProxy = new Proxy<typeof AfaanOromo>(AfaanOromo, {
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
