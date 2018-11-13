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

// Delegate incoming responses to the correct update function
function updateHandler(resp) {
  // IMPORTANT: You need one of these for every custom update function you use!
  if (resp.data.xx) return {}
  else return () => {
  }
}

// Return a dummy update function scoped to a request with a specific id
const proxyUpdateForId = (id) => {
  return async (proxy, resp) => {
    updateHandler(resp)(proxy, resp)
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

        //set the value for optimistic
        _.set(params, 'optimisticResponse.__optimistic', true)


        let pending = await getPending() || []
        pending = pending.concat({id, params, mutation})
        await setPending(pending)

        params.update = proxyUpdateForId(id)
        return mutationFunction(params)
      })
    )}
  </MutationCore>
)
