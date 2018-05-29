
import {
  type as setPrimaryLanguageType,
  SetPrimaryLanguageAction,
} from '../actions/setPrimaryLanguage'

import {
  type as setSecondaryLanguagesType,
  SetSecondaryLanguagesAction,
} from '../actions/setSecondaryLanguages'

import {
  type as setLanguageCompletionStateType,
  SetLanguageCompletionStateAction,
} from '../actions/setLanguageCompletionState'

import { ActorMap, buildReducer } from '../actorMap'
import LanguageSettings from 'types/LanguageSettings'

const actors: ActorMap<LanguageSettings> = {
  [setPrimaryLanguageType]: (prev, { primaryLanguage }: SetPrimaryLanguageAction) => ({
    ...prev,
    primaryLanguage,
  }),
  [setSecondaryLanguagesType]: (prev, { secondaryLanguages }: SetSecondaryLanguagesAction) => ({
    ...prev,
    secondaryLanguages,
  }),
  [setLanguageCompletionStateType]: (
    prev,
    {
      primaryLanguageSet = prev.primaryLanguageSet,
      secondaryLanguagesSet = prev.secondaryLanguagesSet,
    }: SetLanguageCompletionStateAction,
  ) => ({
    ...prev,
    primaryLanguageSet,
    secondaryLanguagesSet,
  }),
}

export const INITIAL_STATE: LanguageSettings = {
  primaryLanguage: null,
  secondaryLanguages: [],
  primaryLanguageSet: false,
  secondaryLanguagesSet: false,
}

export default buildReducer(INITIAL_STATE, actors)
