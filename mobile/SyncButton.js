import React from 'react'
import {AsyncStorage} from 'react-native'
import {Button, Icon} from 'native-base'

import {withSyncOfflineMutation} from './withSyncOfflineMutation'

export class SyncButton extends React.Component {

  render() {
    const {syncOfflineMutation} = this.props
    console.log(syncOfflineMutation, 'syncOfflineMutation')

    if (!syncOfflineMutation) return null

    return <Button transparent
                   onPress={() => syncOfflineMutation.sync()}>
      <Icon name='sync'/>
    </Button>
  }
}

SyncButton = withSyncOfflineMutation({storage: AsyncStorage})(SyncButton)
