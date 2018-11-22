import React from 'react'
import {Button, Text} from 'native-base'

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
            <Button full danger onPress={() => this.onReset({userService, setUsers})}>
              <Text>Reset Db</Text>
            </Button>
          )
        }}

      </AppContext.Consumer>
    )
  }

}
