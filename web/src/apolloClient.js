import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {ApolloLink} from 'apollo-link'
import {persistCache} from 'apollo-cache-persist'
import {onError} from 'apollo-link-error'


import {QueueMutationLink} from './QueueMutationLink'
import {SyncOfflineMutation} from './SyncOfflineMutation'

export const setupApolloClient = async () => {

  const storage = window.localStorage
  const uri = `https://api.graph.cool/simple/v1/cjicrt45i0svu01337s6tl944`
  const httpLink = new HttpLink({uri})
  const onErrorLink = onError(({response, graphQLErrors, networkError}) => {
    console.log(networkError)
    console.log(graphQLErrors)
    response = {errors: null}

  })

  const queueLink = new QueueMutationLink({storage})
  const cache = new InMemoryCache()

  let link = ApolloLink.from([queueLink, onErrorLink, httpLink])

  const apolloClient = new ApolloClient({link, cache,})
  await persistCache({
    cache,
    storage: window.localStorage,
  })

  window.addEventListener('online', () => queueLink.open({apolloClient}))
  window.addEventListener('offline', () => queueLink.close())


  const syncOfflineMutation = new SyncOfflineMutation({apolloClient, storage})
  await syncOfflineMutation.init()
  await syncOfflineMutation.sync()


  return apolloClient

}
