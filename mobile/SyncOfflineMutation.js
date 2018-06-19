export class SyncOfflineMutation {
  constructor({apolloClient, storage} = {}) {
    if (!apolloClient) throw new Error('Apollo Client instance is required when syncing data, please assign value to it')
    if (!storage) throw new Error('Storage can be window.localStorage or AsyncStorage but was not set')

    this.apolloClient = apolloClient
    this.storage = storage
    this.storeKey = '@offlineQueueKey'
    this.offlineData = []
  }

  init = async () => {
    let stored = await this.storage.getItem(this.storeKey)
    this.offlineData = JSON.parse(stored) || []
  }

  hasOfflineData = () => {
    return this.offlineData.length > 0
  }

  sync = async () => {
    //if there is no offline data  then just exit
    if (!this.hasOfflineData()) return

    //return as promise, but in the end clear the storage
    return Promise.all(this.offlineData.map((item) => {
        return this.apolloClient.mutate(item)
      })
    )
      .then(() => this.clearOfflineStorage())
  }

  clearOfflineStorage = async () => {

    this.offlineData = []
    return this.storage.removeItem(this.storeKey)
  }

}

