
import { Dispatch } from 'redux'
import AppState from 'types/AppState'

import { subscribeToTopic, unsubscribeFromTopic, statusSubject } from '@voiceofamerica/voa-shared/helpers/pushNotificationHelper'

import LanguageCode from 'types/LanguageCode'
import * as Dari from 'labels/labels.prs'
import * as Pashto from 'labels/labels.pus'

import setPrimaryLanguage, { SetPrimaryLanguageOptions } from '../actions/setPrimaryLanguage'
// import setSecondaryLanguages from '../actions/setSecondaryLanguages'

function getTopic (languageCode: LanguageCode): string {
  if (languageCode === Dari.languageCode) {
    return Dari.appTopic
  } else if (languageCode === Pashto.languageCode) {
    return Pashto.languageCode
  } else {
    throw new Error(`Language code ${languageCode} not recognized`)
  }
}

export default ({ primaryLanguage }: SetPrimaryLanguageOptions) =>
  (dispatch: Dispatch<AppState> /*, getState: () => AppState */) => {
    const topic = getTopic(primaryLanguage)
    const status = statusSubject.getValue()

    status.subscriptions
      .filter(t => t !== topic)
      .forEach(topic => {
        const sub = unsubscribeFromTopic(topic).subscribe(status => {
          if (status.initialized && !status.subscriptions.some(t => t === topic)) {
            sub.unsubscribe()
          }
        })
      })

    if (!status.subscriptions.some(t => t === topic)) {
      const sub = subscribeToTopic(topic).subscribe(status => {
        if (status.initialized && status.subscriptions.some(t => t === topic)) {
          sub.unsubscribe()
        }
      })
    }

    dispatch(setPrimaryLanguage({ primaryLanguage }))
    // const { languageSettings: { secondaryLanguagesSet } } = getState()
    // if (!secondaryLanguagesSet) {
    //   dispatch(setSecondaryLanguages({ secondaryLanguages: [primaryLanguage] }))
    // }
  }
