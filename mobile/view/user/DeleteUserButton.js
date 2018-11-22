import React from 'react'
import {Button, Icon} from 'native-base'

import {AppContext} from './Context'


export class DeleteUserButton extends React.Component {

  state = {loading: false}

  onDelete = async (remove) => {
    const {data} = this.props
    await remove({docId: data._id})
  }

  render() {
    return (
      <AppContext.Consumer>
        {({remove}) => {
          return (
            <Button full danger onPress={() => this.onDelete(remove)}>
              <Icon active name='trash'/>
            </Button>
          )
        }}

      </AppContext.Consumer>
    )
  }

}
