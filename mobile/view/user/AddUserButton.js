import React from 'react'
import {Button, Icon} from 'native-base'
import {generateId} from '../../queries'
import {AppContext} from './Context'


export class AddUserButton extends React.Component {

  onAdd = async ({userService, setUsers}) => {
    const data = {name: `User_${generateId(4)}`, _id: generateId(6), dateOfBirth: new Date()}

    await userService.repository.insert({data})
    await setUsers() //TODO: should get the proper filter
  }

  render() {
    return (

      <AppContext.Consumer>
        {(context) => {
          return (
            <Button transparent onPress={() => this.onAdd(context)}>
              <Icon name='plus'/>
            </Button>
          )
        }}
      </AppContext.Consumer>


    )
  }
}

