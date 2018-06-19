import React from 'react'
import {TextInput, DatePickerAndroid, View, Button} from 'react-native'
import {Mutation} from 'react-apollo'

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
      <View>


        <Mutation mutation={ADD_USER} update={update} optimisticResponse={setOptimisticResponse(this.state)}>
          {(createUser) => {
            return (
              <Button color="#FF1584" onPress={() => {
                createUser({variables: {name: this.state.name, dateOfBirth: this.state.dateOfBirth}})
                const ctr =   this.state.counter +1

                this.setState({name: `User ${ctr}`, dateOfBirth: new Date(), counter: ctr})

              }} title="Add New"/>
            )
          }}

        </Mutation>

      </View>
    )
  }
}
