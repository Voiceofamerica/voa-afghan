
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import TopNav, { TopNavItem, StaticItem } from '@voiceofamerica/voa-shared/components/TopNav'
import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import analytics, { AnalyticsProps } from '@voiceofamerica/voa-shared/helpers/analyticsHelper'
import ErrorBoundary from 'components/ErrorBoundary'
import Category from 'types/Category'
import { programsScreenLabels, languageCode } from 'labels'

import TopNavTheme from './TopNavTheme'
import Params from './Params'
import VideoPrograms from './VideoPrograms'
import AudioPrograms from './AudioPrograms'
import { programsScreen, programTypeNav, typeItem, active } from './ProgramsScreen.scss'

type ProgramType = 'audio' | 'video'

const VIDEO: ProgramType = 'video'
const AUDIO: ProgramType = 'audio'
const DEFAULT = VIDEO

const DARI_VIDEO_ZONES: Category[] = [
  {
    id: 3034,
    name: 'تلویزیون آشنا',
  },
  {
    id: 3045,
    name: 'کاروان',
  },
  {
    id: 5021,
    name: 'ویدیوهای جالب',
  },
]

const DARI_AUDIO_ZONES: Category[] = [
  {
    id: 3059,
    name: 'نخستین برنامه خبری صبح',
  },
  {
    id: 4003,
    name: 'دومین برنامه خبری صبح',
  },
  {
    id: 4004,
    name: 'نخستین برنامه خبری شب',
  },
  {
    id: 3720,
    name: 'گفت و شنود',
  },
  {
    id: 4005,
    name: 'دومین برنامه خبری شب',
  },
]

const PASHTO_VIDEO_ZONES: Category[] = [
  {
    id: 2961,
    name: 'اشنا تلويزیون',
  },
  {
    id: 2960,
    name: 'کاروان',
  },
  {
    id: 5020,
    name: 'په زړي پوري ویډیوګانې',
  },
]

const PASHTO_AUDIO_ZONES: Category[] = [
  {
    id: 2962,
    name: 'لومړنۍ سهارنۍ خبري خپرونه',
  },
  {
    id: 4007,
    name: 'دویمه سهارنۍ خبري خپرونه',
  },
  {
    id: 2963,
    name: 'لومړنۍ ماښامنۍ خبري خپرونه',
  },
  {
    id: 3694,
    name: 'خبرې اترې',
  },
  {
    id: 2965,
    name: 'دویمه ماښامنۍ خبري خپرونه',
  },
]

interface Props extends RouteComponentProps<Params>, AnalyticsProps {
}

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
    } else if (type === AUDIO) {
      return <AudioPrograms history={history} zoneId={this.getZoneId()} />
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
        <div className={type === AUDIO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(AUDIO)}>
          {programsScreenLabels.audio}
        </div>
      </div>
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
    const defaultZone = this.getZones()[0].id
    const { zone = defaultZone } = this.props.match.params
    return typeof zone === 'number' ? zone : parseInt(zone, 10)
  }

  private renderTopNav () {
    return this.renderTopNavFromItems(this.getZones())
  }

  private renderTopNavFromItems (items: Category[]) {
    const zoneId = this.getZoneId()

    return (
      <ThemeProvider value={TopNavTheme}>
        <TopNav flex>
          <StaticItem />
          {
            items.map(({ id, name }) => {
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

  private getZones () {
    const { type = DEFAULT } = this.props.match.params

    if (languageCode === 'prs') {
      if (type === VIDEO) {
        return DARI_VIDEO_ZONES
      } else if (type === AUDIO) {
        return DARI_AUDIO_ZONES
      } else {
        throw new Error(`Unrecognized program type ${type}`)
      }
    } else if (languageCode === 'pus') {
      if (type === VIDEO) {
        return PASHTO_VIDEO_ZONES
      } else if (type === AUDIO) {
        return PASHTO_AUDIO_ZONES
      } else {
        throw new Error(`Unrecognized program type ${type}`)
      }
    } else {
      throw new Error(`Unrecognized language code ${languageCode}`)
    }
  }
}

const withAnalytics = analytics<Props>({
  state: 'Programs',
  title: 'Programs',
})

export default withAnalytics(ProgramsScreen)
