import {NetInfo} from 'react-native'
import {checkInternetConnection} from 'react-native-offline'

export const onConnectionChange = ({onConnect, onDisconnect}) => {

  NetInfo.isConnected.removeEventListener('connectionChange')
  NetInfo.isConnected.addEventListener('connectionChange',
    (isConnected) => {
      if (isConnected) {

        //check if there is internet connection
        checkInternetConnection().then((hasInternet) => {
          if (hasInternet)
            onConnect && onConnect()
          else
            onDisconnect && onDisconnect()
        })
      }
      else {
        onDisconnect && onDisconnect()
      }
    }
  )

}
