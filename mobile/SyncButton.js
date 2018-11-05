import React from 'react'
import {Button, AsyncStorage} from 'react-native'

import {withSyncOfflineMutation} from './withSyncOfflineMutation'

export class SyncButton extends React.Component {

  render() {
    const {syncOfflineMutation} = this.props
    console.log(syncOfflineMutation, 'syncOfflineMutation')

    if (!syncOfflineMutation) return null

    return <Button color="#DD1584"
                   onPress={() => syncOfflineMutation.sync()} title="Sync Offline data"/>
  }
}

SyncButton = withSyncOfflineMutation({storage: AsyncStorage})(SyncButton)
