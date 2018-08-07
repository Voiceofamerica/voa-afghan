
import * as React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { push } from 'react-router-redux'

import { showControls } from '@voiceofamerica/voa-shared/helpers/mediaControlHelper'
import { deviceIsReady } from '@voiceofamerica/voa-shared/helpers/cordovaHelper'
import { initializeNotifications, subscribeToTopic, coldStartSubject, notificationSubject } from '@voiceofamerica/voa-shared/helpers/pushNotificationHelper'
import setNotificationStatus from '@voiceofamerica/voa-shared/redux/actions/setNotificationStatus'
import NotificationToast from '@voiceofamerica/voa-shared/components/NotificationToast'

import store, { renderReady } from 'redux-store'
import Router from 'containers/Router'
import MediaPlayer from 'containers/MediaPlayer'
import LanguageChooser from 'containers/LanguageChooser'
import client from 'helpers/graphql-client'
import { appTopic } from 'labels'

import { app } from './App.scss'

interface State {
  appReady: boolean
}

export default class App extends React.Component<{}, State> {
  state: State = {
    appReady: false,
  }

  componentDidMount () {
    renderReady.then(() => {
      deviceIsReady.then(() => {
        const splash = (navigator as any).splashscreen
        splash.hide()
      }).catch(err => {
        console.warn('could not hide splashscreen', err)
      })

      this.forceUpdate()
      const appState = store.getState()

      initializeNotifications()
        .subscribe(status => {
          if (status.initialized && status.subscriptions.length > 0) {
            store.dispatch(setNotificationStatus({ shouldGetPushNotifications: true }))
          }
        })

      if (appState.languageSettings.primaryLanguageSet) {
        subscribeToTopic(appTopic)
      }

      notificationSubject.subscribe(notification => {
        console.log('notification', notification)
      })

      coldStartSubject.subscribe(notification => {
        console.log('coldStart', notification)
        if (notification.additionalData.articleId) {
          this.goToArticle(notification.additionalData.articleId)
        }
      })

      if (!__HOST__) {
        deviceIsReady
          .then(this.ready)
          .catch(err => {
            console.error('FATAL: something went wrong during initialization', err)
          })
      } else {
        this.ready()
      }

      if (appState.media.mediaTitle) {
        showControls({
          title: appState.media.mediaTitle,
          playing: false,
        }).catch(() => {
          console.warn('media controls failed to load')
        })
      }
    }).catch(err => {
      console.error('FATAL: redux store failed to hyrate correctly', err)
    })
  }

  render () {
    const { appReady } = this.state
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          {
            appReady
            ? <div key='app' className={app}>
                <LanguageChooser />
                <NotificationToast goToArticle={this.goToArticle} />
                <Router />
                <MediaPlayer />
              </div>
            : <div key='app'>
                <LanguageChooser />
              </div>
          }
        </Provider>
      </ApolloProvider>
    )
  }

  private goToArticle = (articleId: string) => {
    store.dispatch(push(`/article/${articleId}`))
  }

  private ready = () => {
    this.setState({ appReady: true }, () => {
      const splash = (navigator as any).splashscreen
      if (splash) {
        splash.hide()
      }
      if (typeof StatusBar !== 'undefined') {
        StatusBar.overlaysWebView(false)
        StatusBar.backgroundColorByHexString('#eeeeee')
        StatusBar.styleDefault()
      }
    })
  }
}
