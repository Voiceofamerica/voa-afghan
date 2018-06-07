
import { Dispatch } from 'redux'
import AppState from 'types/AppState'

import setPrimaryLanguage, { SetPrimaryLanguageOptions } from '../actions/setPrimaryLanguage'
import setSecondaryLanguages from '../actions/setSecondaryLanguages'

export default ({ primaryLanguage }: SetPrimaryLanguageOptions) =>
  (dispatch: Dispatch<AppState>, getState: () => AppState) => {
    const { languageSettings: { secondaryLanguagesSet } } = getState()

    dispatch(setPrimaryLanguage({ primaryLanguage }))

    if (!secondaryLanguagesSet) {
      dispatch(setSecondaryLanguages({ secondaryLanguages: [primaryLanguage] }))
    }
  }
