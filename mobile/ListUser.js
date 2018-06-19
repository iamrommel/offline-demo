import React from 'react'
import {Button, Text, View} from 'react-native'
import {Query} from 'react-apollo'
import {GET_USERS} from './queries'

export const ListUser = () => {
  return (
    <Query query={GET_USERS} fetchPolicy="cache-and-network" errorPolicy="all">
      {({refetch, loading, error, data = {}}) => {

        const {allUsers = []} = data

        // if (loading) return <Text>Loading...</Text>
        if (error) return <Text>`Error! ${error.message}`</Text>

        return (
          <View>
            {allUsers.map((item, key) => <UserItem key={key}  {...{item}} />)}
            <Button title="Refresh" onPress={() => refetch()}/>
          </View>
        )
      }}
    </Query>
  )
}

const UserItem = ({item}) => {

  return (
    <View>
      <Text>{item.name}, {  (new Date(item.dateOfBirth)).toString() } </Text>
    </View>
  )
}


//Ryla Escalona Manalo
