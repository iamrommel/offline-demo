import {ApolloLink, Observable,} from 'apollo-link'

export default class QueueMutationLink extends ApolloLink {

  constructor({storage} = {}) {
    super()

    if (!storage) throw new Error("Storage can be window.localStorage or AsyncStorage but was not set")
    this.storage = storage
    this.storeKey = '@offlineQueueKey'
    this.opQueue = []
    this.queue = []
    this.isOpen = true

  }


  forwardOperation = () => {
    this.opQueue.forEach(({operation, forward, observer}) => {
      forward = forward || Observable.of

      //if the the param forwardOp is available then use it, else fallback to the forwarded that ws included in the loop
      forward(operation).subscribe(observer)
    })
  }

  open = () => {
    this.isOpen = true
    this.forwardOperation()
    this.clearQueue()
  }

  close = () => {
    this.isOpen = false
  }

  request = (operation, forward) => {

    if (this.isOpen) {
      return forward(operation)
    }


    return new Observable(observer => {
      const operationEntry = {operation, forward, observer}
      this.enqueue(operationEntry)
      return () => this.cancelOperation(operationEntry)
    })
  }

  cancelOperation = (entry) => {
    this.opQueue = this.opQueue.filter(e => e !== entry)
  }

  enqueue = (entry) => {
    this.opQueue.push(entry)
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
    this.opQueue = []
    this.queue = []
    this.storage.removeItem(this.storeKey)
  }
}
