import React from 'react'
import {Mutation as MutationCore} from 'react-apollo'
import {AsyncStorage} from 'react-native'

// Pull serialized mutations from localstorage
const KEY = '@offlineQueueKey'

const getPending = async () => {
  const obj = await AsyncStorage.getItem(KEY)

  return JSON.parse(obj) || []
}

// Store serialized mutations in localstorage
const setPending = async (mutations) => {
  return AsyncStorage.setItem(KEY, JSON.stringify(mutations))
}


// Return a dummy update function scoped to a request with a specific id
const proxyUpdateForId = (id, update) => {
  return async (proxy, resp) => {

    //run the update function
    update(proxy, resp)

    if (resp.data.__optimistic) return
    let pending = await getPending() || []
    pending = pending.filter(mutation => mutation.id !== id)
    await setPending(pending)
  }
}

// The main component wrapper
// Replace <Mutation> calls with this
export const Mutation = props => (
  <MutationCore {...props}>
    {mutationFunction => (
      props.children(async (params) => {
        const id = Math.random()
        const {mutation} = props

        _.set(params, 'optimisticResponse.__optimistic', true)

        let pending = await getPending() || []
        const newPending = {id, ...params, mutation}

        console.log(newPending, 'newPending')

        pending = pending.concat(newPending)
        await setPending(pending)

        //the update logic that was passed from mutation,
        //if it was not passed then return empty function
        const {
          update = () => {
          }
        } = params

        params.update = proxyUpdateForId(id, update)
        return mutationFunction(params)
      })
    )}
  </MutationCore>
)
