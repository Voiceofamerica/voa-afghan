
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { compose } from 'redux'

import Checkbox from '@voiceofamerica/voa-shared/components/Checkbox'

import primaryLanguageThunk from 'redux-store/thunks/primaryLanguage'
import setLanguageCompletionState from 'redux-store/actions/setLanguageCompletionState'

import LanguageCode from 'types/LanguageCode'
import AppState from 'types/AppState'

import * as Dari from 'labels/labels.prs'
import * as Pashto from 'labels/labels.pus'
import { introLabels } from 'labels'

import { languageChooser, content, titles, spacer, explanation, continueButton } from './LanguageChooser.scss'

interface StateProps {
  primaryLanguage: LanguageCode
  primaryLanguageSet: boolean
}

interface DispatchProps {
  setPrimaryLanguage: (code: LanguageCode) => void
  onContinue: () => void
}

type Props = StateProps & DispatchProps

class SettingsRoute extends React.Component<Props> {
  render () {
    const { primaryLanguage, primaryLanguageSet, setPrimaryLanguage, onContinue } = this.props

    const languageChosen = !!primaryLanguage

    if (primaryLanguageSet) {
      return null
    }

    return (
      <div className={languageChooser}>
        <div className={content}>
          <div className={titles}>
            <div>
              {Dari.introLabels.primary}
            </div>
            <div>
              {Pashto.introLabels.primary}
            </div>
          </div>
          <div className={spacer} />
          <Checkbox
            checked={primaryLanguage === Dari.languageCode}
            onChange={() => setPrimaryLanguage(Dari.languageCode)}
          >
            {Dari.languageName}
          </Checkbox>
          <Checkbox
            checked={primaryLanguage === Pashto.languageCode}
            onChange={() => setPrimaryLanguage(Pashto.languageCode)}
          >
            {Pashto.languageName}
          </Checkbox>
          {
            languageChosen
            ? <div className={explanation}>{introLabels.primaryDescription}</div>
            : null
          }
        </div>
        {
          languageChosen
          ? <div className={continueButton} onClick={onContinue}>{introLabels.continue}</div>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = ({ languageSettings: { primaryLanguage, primaryLanguageSet } }: AppState): StateProps => ({
  primaryLanguage,
  primaryLanguageSet,
})

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  setPrimaryLanguage: (primaryLanguage) => dispatch(primaryLanguageThunk({ primaryLanguage })),
  onContinue: () => dispatch(setLanguageCompletionState({ primaryLanguageSet: true })),
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withRedux,
)(SettingsRoute)
