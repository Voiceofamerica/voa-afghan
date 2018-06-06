
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { compose } from 'redux'

import Checkbox from '@voiceofamerica/voa-shared/components/Checkbox'

import setSecondaryLanguages from 'redux-store/actions/setSecondaryLanguages'
import setLanguageCompletionState from 'redux-store/actions/setLanguageCompletionState'

import LanguageCode from 'types/LanguageCode'
import AppState from 'types/AppState'

import * as Dari from 'labels/labels.prs'
import * as Pashto from 'labels/labels.pus'
import { introLabels } from 'labels'

import { languageChooser, content, titles, explanation, continueButton, disabled } from './LanguageChooser.scss'

interface StateProps {
  secondaryLanguages: LanguageCode[]
  secondaryLanguagesSet: boolean
}

interface DispatchProps {
  setSecondaryLanguages: (codes: LanguageCode[]) => void
  onContinue: () => void
}

type Props = StateProps & DispatchProps

class SettingsRoute extends React.Component<Props> {
  render () {
    const { secondaryLanguagesSet, secondaryLanguages, onContinue } = this.props

    if (secondaryLanguagesSet) {
      return null
    }

    const languageChosen = secondaryLanguages.length > 0

    return (
      <div className={languageChooser}>
        <div className={content}>
          <div className={titles}>
            <div>
              {introLabels.secondary}
            </div>
          </div>
          <Checkbox
            checked={secondaryLanguages.indexOf(Dari.languageCode) >= 0}
            onChange={() => this.toggleLanguage(Dari.languageCode)}
          >
            {Dari.languageName}
          </Checkbox>
          <Checkbox
            checked={secondaryLanguages.indexOf(Pashto.languageCode) >= 0}
            onChange={() => this.toggleLanguage(Pashto.languageCode)}
          >
            {Pashto.languageName}
          </Checkbox>
          <div className={explanation}>{introLabels.secondaryDescription}</div>
        </div>
        {
          languageChosen
          ? <div className={continueButton} onClick={onContinue}>{introLabels.continue}</div>
          : <div className={`${continueButton} ${disabled}`} onClick={onContinue}>{introLabels.continue}</div>
        }
      </div>
    )
  }

  private toggleLanguage = (code: LanguageCode) => {
    const { setSecondaryLanguages } = this.props
    setSecondaryLanguages(this.getToggledLanguageArray(code))
  }

  private getToggledLanguageArray = (code: LanguageCode) => {
    const { secondaryLanguages } = this.props
    if (secondaryLanguages.indexOf(code) >= 0) {
      return secondaryLanguages.filter(c => c !== code)
    } else {
      return [...secondaryLanguages, code]
    }
  }
}

const mapStateToProps = ({ languageSettings: { secondaryLanguages, secondaryLanguagesSet } }: AppState): StateProps => ({
  secondaryLanguages,
  secondaryLanguagesSet,
})

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  setSecondaryLanguages: (secondaryLanguages) => dispatch(setSecondaryLanguages({ secondaryLanguages })),
  onContinue: () => dispatch(setLanguageCompletionState({ secondaryLanguagesSet: true })),
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withRedux,
)(SettingsRoute)
