import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {ApolloLink} from 'apollo-link'
import {persistCache} from 'apollo-cache-persist'
import {AsyncStorage} from 'react-native'
import {Toast} from 'native-base'

import {QueueMutationLink} from './QueueMutationLink'
import {onConnectionChange} from './onConnectionChange'
import {SyncOfflineMutation} from './SyncOfflineMutation'


export const setupApolloClient = async () => {

  const uri = `https://api.graph.cool/simple/v1/cjicrt45i0svu01337s6tl944`
  const httpLink = new HttpLink({uri})
  const storage = AsyncStorage

  const queueLink = new QueueMutationLink({storage})


  const cache = new InMemoryCache({
    dataIdFromObject: object => {
      return object.name
    }
  })
  await persistCache({
    cache,
    storage,
    trigger: 'background',
  })

  let link = ApolloLink.from([
    queueLink,
    httpLink,
  ])

  const apolloClient = new ApolloClient({link, cache})

  const onDisconnect = async () => {
    queueLink.close()
  }
  const onConnect = async () => {
    await queueLink.open({apolloClient})
  }

  onConnectionChange({onDisconnect, onConnect})

  //sync all local mutation on start up
  const syncOfflineMutation = new SyncOfflineMutation({apolloClient, storage})
  await syncOfflineMutation.init()
  await syncOfflineMutation.sync()

  return apolloClient

}
