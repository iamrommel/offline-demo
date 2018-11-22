import React from 'react'
import {Button, Icon} from 'native-base'

import {AppContext} from './Context'


export class DeleteUserButton extends React.Component {

  state = {loading: false}

  onDelete = async ({userService, setUsers}) => {
    const {data} = this.props
    const docId = data._id
    await userService.repository.remove({docId})
    await setUsers() //TODO: should get the proper filter
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          return (
            <Button full danger onPress={() => this.onDelete(context)}>
              <Icon active name='trash'/>
            </Button>
          )
        }}

      </AppContext.Consumer>
    )
  }

}
