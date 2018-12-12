import React from 'react'
import {Button, Icon} from 'native-base'
import {AppContext} from './Context'

export class SyncButton extends React.Component {

  onSync = async ({userService}) => {
    const url = "https://63b2c39b.ngrok.io/sync/tickets"
    await userService.repository.sync({url})
  }

  render() {
    return (
      <AppContext.Consumer>
        {
          (context) => {
            return (
              <Button transparent
                      onPress={() => this.onSync(context)}>
                <Icon name='refresh'/>
              </Button>
            )
          }
        }

      </AppContext.Consumer>
    )


  }
}

