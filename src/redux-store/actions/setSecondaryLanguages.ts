
import { Action } from 'redux'
import LanguageCode from 'types/LanguageCode'

export const type = 'SET_SECONDARY_LANGUAGE'

interface SetSecondaryLanguagesOptions {
  secondaryLanguages: LanguageCode[]
}

export type SetSecondaryLanguagesAction = SetSecondaryLanguagesOptions & Action

export default (options: SetSecondaryLanguagesOptions): SetSecondaryLanguagesAction => ({
  ...options,
  type,
})
