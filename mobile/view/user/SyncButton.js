import React from 'react'
import {Button, Icon} from 'native-base'

export class SyncButton extends React.Component {

  onSync = () => {

  }

  render() {
    const {syncOfflineMutation} = this.props

    if (!syncOfflineMutation) return null

    return <Button transparent
                   onPress={() => syncOfflineMutation.sync()}>
      <Icon name='refresh'/>
    </Button>
  }
}

