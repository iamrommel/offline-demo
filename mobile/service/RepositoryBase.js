import {checkInternetConnection} from 'react-native-offline'


export class RepositoryBase {

  repository = null

  onlineOfflineRepositoryFactory = async (onlineRepository, offlineRepository) => {
    const hasInternet = await checkInternetConnection()
    return hasInternet ? onlineRepository : offlineRepository
  }


  find = async ({where} = {}) => {

    //factory where to get the data
    console.log(this.repository)

    if (!this.repository) throw new Error('Repository is required')

    //find using the storage factory
    return this.repository.find({where})

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
