import React from 'react'
//import {Mutation} from 'react-apollo'
import {Button, Icon} from 'native-base'
import {Mutation} from './Mutation'

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

  render() {
    return (
      <Mutation mutation={ADD_USER}>
        {(createUser) => {
          return (
            <Button transparent onPress={() => {
              createUser({
                variables: {name: this.state.name, dateOfBirth: this.state.dateOfBirth},
                update: update,
                optimisticResponse: setOptimisticResponse(this.state)
              })
              const ctr = this.state.counter + 1
              this.setState({name: `User_${generateId(4)}`, dateOfBirth: new Date(), counter: ctr})
            }}>
              <Icon name='plus'/>
            </Button>
          )
        }}

      </Mutation>
    )
  }
}
