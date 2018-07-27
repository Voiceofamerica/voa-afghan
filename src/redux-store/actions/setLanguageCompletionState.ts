
import { Action } from 'redux'

export const type = 'SET_LANGUAGE_COMPLETION_STATE'

interface SetLanguageCompletionStateOptions {
  primaryLanguageSet?: boolean
  // secondaryLanguagesSet?: boolean
}

export type SetLanguageCompletionStateAction = SetLanguageCompletionStateOptions & Action

export default (options: SetLanguageCompletionStateOptions): SetLanguageCompletionStateAction => ({
  ...options,
  type,
})
