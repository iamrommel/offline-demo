import React from 'react'
import {ApolloProvider} from 'react-apollo'
import Expo, {AppLoading, Font} from 'expo'
import {StyleProvider, Container, Root, Header, Left, Button, Icon, Title, Body, Right, Content} from 'native-base'
import {StatusBar} from 'react-native'

import {setupApolloClient} from './apolloClient'
import {ListUser} from './ListUser'
import {AddUser} from './AddUser'
import {SyncButton} from './SyncButton'
import getTheme from './theme/components'
import {MainContent} from './MainContent'


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
    const {apolloClient, theme} = this.state

    if (!this.state.isReady || !apolloClient || !theme) {
      return <AppLoading/>
    }

    return (
      <StyleProvider style={theme}>
        <Root>
          <Container style={{marginTop: StatusBar.currentHeight}}>
            <ApolloProvider client={apolloClient}>
              <Container>
                <Header>
                  <Left>
                    <Button transparent>
                      <Icon name='glass'/>
                    </Button>
                  </Left>
                  <Body>
                  <Title>Header</Title>
                  </Body>
                  <Right/>
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
