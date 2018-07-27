
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import store from 'redux-store'

import * as Dari from './labels/labels.prs'
import * as Pashto from './labels/labels.pus'

setAnalyticsOptions({
  language: 'afghan',
  languageService: 'afghan',
  propertyName: 'voa afghan news app',
  propertyId: '397',
  rsidAccount: 'bbgvoa.afghan.streaming.app',
  reportSuite: 'bbgvoa.afghan.streaming.app',
})

setDirection('rtl')

moment.locale('en-us')

const getCurrentLabels = (): (typeof Dari & typeof Pashto) & Object => {
  const { languageSettings: { primaryLanguage } } = store.getState()
  if (primaryLanguage === 'prs') {
    return Dari as any
  } else if (primaryLanguage === 'pus') {
    return Pashto as any
  } else {
    return Dari as any
  }
}

const labelProxy = new Proxy<typeof Dari & typeof Pashto>(Dari as any, {
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
