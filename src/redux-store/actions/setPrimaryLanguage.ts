
import { Action } from 'redux'
import LanguageCode from 'types/LanguageCode'

export const type = 'SET_PRIMARY_LANGUAGE'

export interface SetPrimaryLanguageOptions {
  primaryLanguage: LanguageCode
}

export type SetPrimaryLanguageAction = SetPrimaryLanguageOptions & Action

export default (options: SetPrimaryLanguageOptions): SetPrimaryLanguageAction => ({
  ...options,
  type,
})
