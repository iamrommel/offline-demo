import {ApolloLink, Observable} from 'apollo-link'
import {SyncOfflineMutation} from './SyncOfflineMutation'

export class QueueMutationLink extends ApolloLink {
  constructor({storage} = {}) {
    super()

    if (!storage) throw new Error('Storage can be window.localStorage or AsyncStorage but was not set')
    this.storage = storage
    this.storeKey = '@offlineQueueKey'
    this.queue = []
    this.isOpen = true
  }

  resync = async ({apolloClient, syncOfflineMutation}) => {
    syncOfflineMutation = syncOfflineMutation || new SyncOfflineMutation({apolloClient, storage: this.storage})
    await syncOfflineMutation.init()
    await syncOfflineMutation.sync()
    this.clearQueue()
  }

  open = async ({apolloClient} = {}) => {
    if (!apolloClient) return

    this.isOpen = true

    await this.resync({apolloClient})

  }
  close = () => {
    this.isOpen = false
  }
  request = (operation, forward) => {
    if (this.isOpen) {
      return forward(operation)
    }
    else {
      //if it is close enqueue first before forwarding
      this.enqueue({operation})
      //return {offline: true}
      //return forward(operation)
      return new Observable(() => {
        return () => ({isOffline: true})
      })

    }
  }
  enqueue = (entry) => {
    const item = {...entry}
    const {operation} = item
    const {query, variables} = operation || {}
    let definitions = []

    if (query && query.definitions)
      definitions = query.definitions.filter(e => e.operation === 'mutation')

    //store only if there are values for query.definitions
    if (definitions.length > 0) {
      query.definitions = definitions
      this.queue.push({mutation: query, variables})

      //update the value of local storage
      this.storage.setItem(this.storeKey, JSON.stringify(this.queue))
    }

  }
  clearQueue = () => {
    this.queue = []
  }

}
