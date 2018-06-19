import {NetInfo} from 'react-native'

export const onConnectionChange = ({onConnect, onDisconnect}) => {

  NetInfo.isConnected.removeEventListener('connectionChange')
  NetInfo.isConnected.addEventListener('connectionChange',
    (isConnected) => {
      if (isConnected) {
        onConnect && onConnect()
      }
      else {
        onDisconnect && onDisconnect()
      }
    }
  )

}
