import React from 'react'
import {ApolloProvider} from 'react-apollo'
import Expo, {AppLoading, Font} from 'expo'
import {StyleProvider, Container, Root, Header, Left, Title, Body, Right} from 'native-base'
import {StatusBar} from 'react-native'

import {setupApolloClient} from './apolloClient'
import {AddUser} from './AddUser'
import {SyncButton} from './SyncButton'
import getTheme from './theme/components'
import {MainContent} from './MainContent'
import {OfflineWarning} from './OfflineWarning'
import {onConnectionChange} from './onConnectionChange'
import {SyncOfflineMutation} from '../web/src/SyncOfflineMutation'


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

    //sync all local mutation on start up
    const syncOfflineMutation = new SyncOfflineMutation({apolloClient, storage})
    await syncOfflineMutation.init()

    //this should be synching when there is connection only
    //await syncOfflineMutation.sync()

    const onDisconnect = async () => {
      this.setState({isOffline: true})
    }
    const onConnect = async () => {
      this.setState({isOffline: false})
      await syncOfflineMutation.sync()
      Alert.alert('Done sync', 'Done synching when connected')
    }

    onConnectionChange({onDisconnect, onConnect})

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
              <Container>
                <Header>
                  <Left>
                    <AddUser/>
                  </Left>
                  <Body>
                  <Title>User List</Title>
                  </Body>
                  <Right>
                    <SyncButton/>
                  </Right>
                </Header>
                <MainContent/>
              </Container>
            </ApolloProvider>
          </Container>
        </Root>
      </StyleProvider>
    )
  }
}

Expo.registerRootComponent(App)
