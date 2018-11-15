import React from 'react'
import {ApolloProvider} from 'react-apollo'
import Expo, {AppLoading, Font} from 'expo'
import {StyleProvider, Container, Root, } from 'native-base'
import {AsyncStorage, StatusBar, Alert} from 'react-native'

import {setupApolloClient} from './apolloClient'
import getTheme from './theme/components'
import {MainContent} from './MainContent'
import {OfflineWarning} from './OfflineWarning'

export default class App extends React.Component {

  state = {apolloClient: null, isLoading: false, isReady: false,}

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })

    const theme = require('./theme/variables/index').default
    this.setState({isReady: true, theme: getTheme(theme)})
  }

  async componentDidMount() {

    const apolloClient = await setupApolloClient()
    this.setState({apolloClient})
  }

  render() {
    const {apolloClient, theme, isOffline} = this.state

    if (!this.state.isReady || !apolloClient || !theme) {
      return <AppLoading/>
    }

    return (
      <StyleProvider style={theme}>
        <Root>
          <Container style={{marginTop: StatusBar.currentHeight}}>
            <ApolloProvider client={apolloClient}>
              <OfflineWarning isOffline={isOffline}/>
              <MainContent/>
            </ApolloProvider>
          </Container>
        </Root>
      </StyleProvider>
    )
  }
}

Expo.registerRootComponent(App)


