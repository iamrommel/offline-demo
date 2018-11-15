import React from 'react'
//import {Mutation} from 'react-apollo'
import {Button, Icon} from 'native-base'
import {generateId} from './queries'
import {UserRepository} from './service/UserRepository'


export class AddUser extends React.Component {

  onAdd = async () => {
    const repository = new UserRepository()
    const data = {name: `User_${generateId(4)}`, _id: generateId(6), dateOfBirth: new Date()}

    repository.insert({data})

  }

  render() {
    return (
      <Button transparent onPress={this.onAdd}>
        <Icon name='plus'/>
      </Button>
    )
  }
}
