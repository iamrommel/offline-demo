import {checkInternetConnection} from 'react-native-offline'

export const onlineOfflineRepositoryFactory = async (onlineRepository, offlineRepository) => {
  const hasInternet = await checkInternetConnection()
  return hasInternet ? onlineRepository : offlineRepository
}
