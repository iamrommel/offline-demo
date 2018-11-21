import React from 'react'
import {Button, Icon} from 'native-base'
import {AppContext} from './Context'

export class SyncButton extends React.Component {


  render() {

    return (
      <AppContext.Consumer>
        {
          ({sync}) => {
            return (
              <Button transparent
                      onPress={sync}>
                <Icon name='refresh'/>
              </Button>
            )
          }
        }

      </AppContext.Consumer>
    )


  }
}

