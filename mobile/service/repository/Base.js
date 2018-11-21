import {checkInternetConnection} from 'react-native-offline'

export const onlineOfflineRepositoryFactory = async (onlineRepository, offlineRepository) => {
  const hasInternet = await checkInternetConnection()
  return hasInternet ? onlineRepository : offlineRepository
}


export class Base {
  constructor({repositoryFactory}) {
    if (!repositoryFactory) throw  new Error('Repository function is needed in RepositoryBase')
    this.repository = repositoryFactory()
  }
}
