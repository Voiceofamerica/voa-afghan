
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import AppState from 'types/AppState'

import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import PrimaryLanguageChooser from './PrimaryLanguageChooser'
// import SecondaryLanguageChooser from './SecondaryLanguageChooser'

interface StateProps {
  primaryLanguageSet: boolean
  // secondaryLanguagesSet: boolean
}

type Props = StateProps

class SettingsRoute extends React.Component<Props> {
  renderChooser () {
    const { primaryLanguageSet /*, secondaryLanguagesSet */ } = this.props

    if (!primaryLanguageSet) {
      return <PrimaryLanguageChooser />
    // } else if (!secondaryLanguagesSet) {
    //   return <SecondaryLanguageChooser />
    } else {
      return null
    }
  }

  render () {
    return (
      <ThemeProvider value={{ checkboxCheckedColor: '#2083C6' }}>
        {this.renderChooser()}
      </ThemeProvider>
    )
  }
}

const mapStateToProps = ({ languageSettings: { primaryLanguageSet /*, secondaryLanguagesSet */ } }: AppState): StateProps => ({
  primaryLanguageSet,
  // secondaryLanguagesSet,
})

const withRedux = connect(mapStateToProps)

export default compose(
  withRedux,
)(SettingsRoute)
