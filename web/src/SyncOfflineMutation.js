export class SyncOfflineMutation {
  constructor ({apolloClient, storage} = {}) {
    if (!apolloClient) throw new Error('Apollo Client instance is required when syncing data, please assign value to it')
    if (!storage) throw new Error('Storage can be window.localStorage or AsyncStorage but was not set')

    this.apolloClient = apolloClient
    this.storage = storage
    this.storeKey = '@offlineQueueKey'
    this.offlineData = []
  }

  getOfflineData = async () => {
    return this.storage.getItem(this.storeKey)
  }

  hasOfflineData = () => {
    return !!(this.offlineData && this.offlineData.length > 0)
  }

  addOfflineData = (queue = []) => {

    //add only if there is a value
    if (queue && queue.length > 0)
      this.storage.setItem(this.storeKey, JSON.stringify(queue))
  }

  clearOfflineData = async () => {
    this.offlineData = []
    return this.storage.removeItem(this.storeKey)
  }

  init = async () => {
    let stored = await this.getOfflineData()
    this.offlineData = JSON.parse(stored) || []
  }

  sync = async () => {
    //if there is no offline data  then just exit
    if (!this.hasOfflineData()) return

    //return as promise, but in the end clear the storage
    const uncommittedOfflineMutation = []

    await Promise.all(this.offlineData.map(async (item) => {
      try {
        await this.apolloClient.mutate(item)
      }
      catch (e) {
        //set the errored mutation to the stash
        uncommittedOfflineMutation.push(item)
      }
    }))

    //wait before it was cleared
    await this.clearOfflineData()

    //then add again the uncommited storage
    this.addOfflineData(uncommittedOfflineMutation)

  }

}

