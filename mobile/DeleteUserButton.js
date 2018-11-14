import React from 'react'
import {Button, Icon} from 'native-base'
import {DELETE_USER, GET_USERS} from './queries'
import {Mutation} from './Mutation'

export class DeleteUserButton extends React.Component {

  state = {loading: false}

  onDelete = async (mutate) => {
    const {data} = this.props
    const variables = {id: data.id}
    const refetchQueries = () => ['allUsers']
    const update = (proxy, {data: {deleteUser: {id}}}) => {

      let {allUsers} = proxy.readQuery({
        query: GET_USERS
      })

      proxy.writeQuery({query: GET_USERS, data: {allUsers: allUsers.filter(user => user.id !== id)}})
    }

    const optimisticResponse = {
      __typename: 'Mutation',
      deleteUser: {
        __typename: 'User',
        ...data
      }
    }

    try {
      this.setState({loading: true})
      await mutate({variables, update, optimisticResponse})
    }
    catch (e) {
      console.log('there s error', e)
    }
    finally {
      this.setState({loading: false})
    }
  }

  render() {
    return (
      <Mutation mutation={DELETE_USER}>
        {(mutate) => {
          return (
            <Button full danger onPress={() => this.onDelete(mutate)}>
              <Icon active name='trash'/>
            </Button>
          )
        }}

      </Mutation>
    )
  }

}
