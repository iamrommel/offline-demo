import React from 'react'
import {DatePickerAndroid, View} from 'react-native'
import {Mutation} from 'react-apollo'
import {Button, Icon} from 'native-base'

import {ADD_USER, GET_USERS, generateId} from './queries'

const update = (cache, {data: {createUser}}) => {
  const {allUsers} = cache.readQuery({query: GET_USERS})
  cache.writeQuery({
    query: GET_USERS,
    data: {allUsers: allUsers.concat([createUser])}
  })
}


const setOptimisticResponse = ({name, dateOfBirth}) => {
  const id = generateId()

  const optimisticResponse = {
    __typename: 'Mutation',
    createUser: {
      __typename: 'User',
      id,
      name,
      dateOfBirth: `${dateOfBirth}`
    }
  }

  return optimisticResponse

}


export class AddUser extends React.Component {

  state = {name: 'User 1', dateOfBirth: new Date(), counter: 1}

  onPick = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({date: this.state.dateOfBirth})
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({dateOfBirth: new Date(year, month, day)})
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message)
    }

  }


  render() {
    return (
      <Mutation mutation={ADD_USER} update={update} optimisticResponse={setOptimisticResponse(this.state)}>
        {(createUser) => {
          return (
            <Button transparent onPress={() => {
              createUser({variables: {name: this.state.name, dateOfBirth: this.state.dateOfBirth}})
              const ctr = this.state.counter + 1
              this.setState({name: `User ${ctr}`, dateOfBirth: new Date(), counter: ctr})
            }}>
              <Icon name='plus'/>
            </Button>
          )
        }}

      </Mutation>
    )
  }
}
