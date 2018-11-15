import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {ApolloLink} from 'apollo-link'

export const setupApolloClient = async () => {

  const uri = `https://api.graph.cool/simple/v1/cjicrt45i0svu01337s6tl944`
  const httpLink = new HttpLink({uri})

  const cache = new InMemoryCache()
  let link = ApolloLink.from([
    httpLink,
  ])

  return new ApolloClient({link, cache})

}
