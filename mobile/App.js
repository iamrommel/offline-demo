import React from 'react'
import { View} from 'react-native'
import {ApolloProvider} from 'react-apollo'
import Expo, {AppLoading} from 'expo'

import {setupApolloClient} from './apolloClient'
import {ListUser} from './ListUser'
import {AddUser} from './AddUser'
import {SyncButton} from './SyncButton'


export default class App extends React.Component {

  state = {apolloClient: null}

  async componentDidMount() {

    const apolloClient = await setupApolloClient()
    this.setState({apolloClient})
  }

  render() {
    const {apolloClient} = this.state
    if (!apolloClient) return <AppLoading/>

    return (
      <ApolloProvider client={apolloClient}>
        <View style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}>
          <AddUser/>
          <ListUser/>
          <SyncButton/>
        </View>
      </ApolloProvider>
    )
  }
}

Expo.registerRootComponent(App)
