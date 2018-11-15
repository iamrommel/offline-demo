import {checkInternetConnection} from 'react-native-offline'


export class StorageBase {

  storage = null

  onlineOfflineStorageFactory = async (onlineStorage, offlineStorage) => {
    const hasInternet = await checkInternetConnection()
    return hasInternet ? onlineStorage : offlineStorage
  }


  find = async ({where} = {}) => {

    //factory where to get the data
    console.log(this.storage)

    if (!this.storage) throw new Error('Storage is required')

    //find using the storage factory
    return storage.find({where})

  }
  _findOne = ({where}) => {
  }
  _insert = ({data}) => {
  }
  _delete = ({where}) => {
  }
  _update = ({where, data}) => {
  }
}
