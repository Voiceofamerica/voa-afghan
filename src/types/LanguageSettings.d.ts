
import LanguageCode from './LanguageCode'

export default interface LanguageSettings {
  primaryLanguage: LanguageCode | null
  // secondaryLanguages: LanguageCode[]
  primaryLanguageSet: boolean
  // secondaryLanguagesSet: boolean
}
