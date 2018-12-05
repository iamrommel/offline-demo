import React from 'react'
import {Button, Text, Icon} from 'native-base'

import {AppContext} from './Context'


export class ResetDbButton extends React.Component {

  state = {loading: false}

  onReset = async ({userService, setUsers}) => {
    await userService.repository.clearDb()
    setUsers()
  }

  render() {
    return (
      <AppContext.Consumer>
        {({userService, setUsers}) => {
          return (
            <Button transparent onPress={() => this.onReset({userService, setUsers})}>
              <Icon name="trash"/>
            </Button>
          )
        }}

      </AppContext.Consumer>
    )
  }

}
