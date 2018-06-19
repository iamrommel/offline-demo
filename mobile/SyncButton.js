import React from 'react'
import {Button, AsyncStorage} from 'react-native'

import {withSyncOfflineMutation} from './withSyncOfflineMutation'

export class SyncButton extends React.Component {
  render() {
    const {hasOfflineData, sync} = this.props.syncOfflineMutation
    return <Button color="#DD1584" disabled={!hasOfflineData} onPress={sync} title="Sync Offline data"/>
  }
}

SyncButton = withSyncOfflineMutation({storage: AsyncStorage})(SyncButton)
