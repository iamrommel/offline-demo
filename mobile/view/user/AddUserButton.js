import React from 'react'
import {Button, Icon} from 'native-base'
import {generateId} from '../../queries'
import {AppContext} from './Context'


export class AddUserButton extends React.Component {

  onAdd = async (add) => {

    const data = {name: `User_${generateId(4)}`, _id: generateId(6), dateOfBirth: new Date()}
    add({data})

  }

  render() {
    return (

      <AppContext.Consumer>
        {({add}) => {
          return (
            <Button transparent onPress={() => this.onAdd(add)}>
              <Icon name='plus'/>
            </Button>
          )
        }}
      </AppContext.Consumer>


    )
  }
}

