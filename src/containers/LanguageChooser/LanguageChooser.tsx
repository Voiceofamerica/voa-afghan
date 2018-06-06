
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import AppState from 'types/AppState'

import PrimaryLanguageChooser from './PrimaryLanguageChooser'
import SecondaryLanguageChooser from './SecondaryLanguageChooser'

interface StateProps {
  primaryLanguageSet: boolean
  secondaryLanguagesSet: boolean
}

type Props = StateProps

class SettingsRoute extends React.Component<Props> {
  render () {
    const { primaryLanguageSet, secondaryLanguagesSet } = this.props

    if (!primaryLanguageSet) {
      return <PrimaryLanguageChooser />
    } else if (!secondaryLanguagesSet) {
      return <SecondaryLanguageChooser />
    } else {
      return null
    }
  }
}

const mapStateToProps = ({ languageSettings: { primaryLanguageSet, secondaryLanguagesSet } }: AppState): StateProps => ({
  primaryLanguageSet,
  secondaryLanguagesSet,
})

const withRedux = connect(mapStateToProps)

export default compose(
  withRedux,
)(SettingsRoute)
