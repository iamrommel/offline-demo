import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {ApolloLink} from 'apollo-link'
import {persistCache} from 'apollo-cache-persist'


import QueueMutationLink from './QueueMutationLink'

export const setupApolloClient = async () => {

  const uri = `https://api.graph.cool/simple/v1/cjicrt45i0svu01337s6tl944`
  const httpLink = new HttpLink({uri})


  const queueLink = new QueueMutationLink({storage: window.localStorage})

  window.addEventListener('online', () => queueLink.open())
  window.addEventListener('offline', () => queueLink.close())


  const cache = new InMemoryCache()
  persistCache({
    cache,
    storage: window.localStorage,
  })


  let link = ApolloLink.from([
    queueLink,
    httpLink,
  ])

  return new ApolloClient({link, cache})
}
