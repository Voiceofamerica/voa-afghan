
import { Dispatch } from 'redux'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import AppState from 'types/AppState'

import { showControls } from '@voiceofamerica/voa-shared/helpers/mediaControlHelper'
import playMedia from '../actions/playMedia'
import toggleMediaDrawer from '../actions/toggleMediaDrawer'

interface PlayMediaOptions {
  mediaUrl: string
  mediaTitle: string
  mediaDescription: string
  isVideo: boolean
  imageUrl?: string
}

export default (options: PlayMediaOptions) =>
  (dispatch: Dispatch<AppState>, getState: () => AppState) => {
    dispatch(toggleMediaDrawer({ open: true }))
    let playing = false

    const {
      mediaUrl: originalMediaUrl,
    } = options

    const state = getState()
    if (state.media.originalMediaUrl === originalMediaUrl) {
      return
    }

    showControls({
      title: options.mediaTitle,
      playing: true,
    })
    .catch(() => {
      console.warn('failed to show media controls')
    })

    dispatch(playMedia({
      ...options,
      originalMediaUrl,
      keepLocation: playing,
    }))

    playing = true
  }
