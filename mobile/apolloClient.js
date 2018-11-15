import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {ApolloLink} from 'apollo-link'
import { RetryLink } from 'apollo-link-retry'
import {persistCache} from 'apollo-cache-persist'
import {AsyncStorage, Alert} from 'react-native'

import {QueueMutationLink} from './QueueMutationLink'


export const setupApolloClient = async () => {

  const uri = `https://api.graph.cool/simple/v1/cjicrt45i0svu01337s6tl944`
  const httpLink = new HttpLink({uri})
  const retry = new RetryLink({ attempts : { max : Infinity } })

  const storage = AsyncStorage

  const queueLink = new QueueMutationLink({storage})


  const cache = new InMemoryCache()
  await persistCache({
    cache,
    storage
  })

  let link = ApolloLink.from([
    //queueLink,
    retry,
    httpLink,
  ])

  const apolloClient = new ApolloClient({link, cache})



  return apolloClient

}
