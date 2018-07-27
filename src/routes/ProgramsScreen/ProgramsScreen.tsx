
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { compose } from 'redux'
// import { connect } from 'react-redux'
import TopNav, { TopNavItem, StaticItem } from '@voiceofamerica/voa-shared/components/TopNav'
import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import analytics, { AnalyticsProps } from '@voiceofamerica/voa-shared/helpers/analyticsHelper'
import ErrorBoundary from 'components/ErrorBoundary'
import Category from 'types/Category'
// import LanguageCode from 'types/LanguageCode'
// import AppState from 'types/AppState'
import { programsScreenLabels } from 'labels'

import TopNavTheme from './TopNavTheme'
import Params from './Params'
import VideoPrograms from './VideoPrograms'
import { programsScreen, programTypeNav, typeItem, active } from './ProgramsScreen.scss'

type ProgramType = 'audio' | 'video'

const VIDEO: ProgramType = 'video'
const DEFAULT = VIDEO

const PROGRAM_ZONES: Category[] = [
  {
    id: 0,
    name: 'همه برنامه ها',
  },
]

interface StateProps {
  // secondaryLanguages: LanguageCode[]
}

type OwnProps = RouteComponentProps<Params> & AnalyticsProps

type Props = StateProps & OwnProps

class ProgramsScreen extends React.Component<Props> {
  setProgramType = (programType: ProgramType) => {
    const { history, match } = this.props
    const { type } = match.params

    if (type === programType) {
      return
    }

    history.replace(`/programs/${programType}`)
  }

  setZoneId = (zoneId: number) => {
    const { history, match } = this.props
    const { type = DEFAULT } = match.params
    history.replace(`/programs/${type}/${zoneId}`)
  }

  renderPrograms () {
    const { history, match } = this.props
    const { type = DEFAULT } = match.params
    if (type === VIDEO) {
      return <VideoPrograms history={history} zoneId={this.getZoneId()} />
    } else {
      throw new Error(`Invalid programType ${type}`)
    }
  }

  renderProgramTypes () {
    const { type = DEFAULT } = this.props.match.params

    return (
      <div className={programTypeNav}>
        <div className={type === VIDEO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(VIDEO)}>
          {programsScreenLabels.videos}
        </div>
      </div>
    )
  }

  renderTopNav () {
    const zoneId = this.getZoneId()

    return (
      <ThemeProvider value={TopNavTheme}>
        <TopNav flex>
          <StaticItem />
          {
            PROGRAM_ZONES.map(({ id, name }) => {
              const selected = zoneId === id

              return (
                <TopNavItem
                  key={id}
                  selected={selected}
                  onClick={() => this.setZoneId(id)}
                >
                  {name}
                </TopNavItem>
              )
            })
          }
          <TopNavItem />
        </TopNav>
      </ThemeProvider>
    )
  }

  render () {
    return (
      <div className={programsScreen}>
        {this.renderTopNav()}
        <ErrorBoundary>
          {this.renderPrograms()}
        </ErrorBoundary>
        {this.renderProgramTypes()}
      </div>
    )
  }

  private getZoneId = () => {
    const { zone = PROGRAM_ZONES[0].id } = this.props.match.params
    return typeof zone === 'number' ? zone : parseInt(zone, 10)
  }
}

const withAnalytics = analytics<Props>({
  state: 'Programs',
  title: 'Programs',
})

// const mapStateToProps = ({ languageSettings: { secondaryLanguages } }: AppState): StateProps => ({
//   secondaryLanguages,
// })
//
// const withRedux = connect<StateProps, {}, OwnProps>(mapStateToProps)

export default compose(
  withAnalytics,
  // withRedux,
)(ProgramsScreen)
