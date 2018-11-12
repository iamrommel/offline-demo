import React from 'react'
import {Button, Icon} from 'native-base'
import {DELETE_USER, GET_USERS} from './queries'
import {Alert} from 'react-native'

export class DeleteUserButton extends React.Component {

  state = {loading: false}

  onDelete = async () => {
    const {data, client} = this.props
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

    console.log(optimisticResponse, 'optimisticResponse')

    try {
      this.setState({loading: true})
      console.log('starts mutation')
      await client.mutate({mutation: DELETE_USER, variables, update, optimisticResponse})
      console.log('ends mutation')
     //Alert.alert('Ends mutation', 'Ends mutation')
    }
    catch (e) {
      console.log('there s error', e)
    }
    finally {


      this.setState({loading: false})

      console.log('went to finally')
    }

  }

  render() {
    const {loading} = this.state
    return (
      <Button full danger disabled={loading} onPress={this.onDelete}>
        <Icon active name={loading ? 'refresh' : 'trash'}/>
      </Button>
    )
  }

}
