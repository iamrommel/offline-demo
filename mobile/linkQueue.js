import {ApolloLink, Observable, NextLink} from 'apollo-link'
import {AsyncStorage} from 'react-native'

export default class QueueLink extends ApolloLink {


  storeKey = '@offlineQueueKey'
  opQueue = []
  isOpen = true
  storage = null

  functionReplacer = (key, value) => {
    if (typeof(value) === 'function') {
      return value.toString()
    }
    return value
  }

  functionReviver = (key, value) => {
    if (key === '') return value

    if (typeof value === 'string') {
      const rfunc = /function[^\(]*\(([^\)]*)\)[^\{]*{([^\}]*)\}/,
        match = value.match(rfunc)

      if (match) {
        const args = match[1].split(',').map(function (arg) {
          return arg.replace(/\s+/, '')
        })
        return new Function(args, match[2])
      }
    }
    return value
  }

  init = async ({storage} = {}) => {
    this.storage = storage || AsyncStorage

    //init the operation queue with the value from async storage
    let stored = (await this.storage.getItem(this.storeKey))

    //this.clearQueue()
    console.log(stored, 'stored')

    //if there is stored value then use it
    if (stored) {
      stored = JSON.parse(stored)
      this.opQueue = [...stored]

      //rerun the queue
      this.open()

    }
  }


  open = () => {
    this.isOpen = true
    this.opQueue.forEach(({operation, forward, observer}) => {
      const op = (op) => Observable.of()
      forward = forward || op

      console.log('forwarded')

      forward(operation).subscribe(observer)

    })


    //console.log(this.opQueue, 'this.opQueue')

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

    //update the value of local storage
    this.storage.setItem(this.storeKey, JSON.stringify(this.opQueue))
  }

  clearQueue = () => {
    this.opQueue = []
    this.storage.removeItem(this.storeKey)
  }

}
