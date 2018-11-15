import {checkInternetConnection} from 'react-native-offline'


export class RepositoryBase {

  offlineRepository = null
  onlineRepository = null
  constructor(onlineRepository, offlineRepository) {
    this.offlineRepository = offlineRepository
    this.onlineRepository =  onlineRepository
  }


  onlineOfflineRepositoryFactory = async (onlineRepository, offlineRepository) => {
    const hasInternet = await checkInternetConnection()
    return hasInternet ? onlineRepository : offlineRepository
  }


  /*
  * Always get from the offline storage, if there is net connection it will it will automatically sync this values
  * will use the apollo subscription logic for changes sync
  * */
  find = async ({where} = {}) => {
    return this.offlineRepository.find({where})
  }

  _findOne = ({where}) => {
  }
  insert = ({data}) => {
    return this.offlineRepository.insert({data})
  }
  _delete = ({where}) => {
  }
  _update = ({where, data}) => {
  }
}
