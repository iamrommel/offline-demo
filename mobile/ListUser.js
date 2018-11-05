import React from 'react'
import {Text} from 'react-native'
import {Query} from 'react-apollo'
import {ListItem, List, Body} from 'native-base'

import {GET_USERS} from './queries'


export const ListUser = () => {
  return (
    <Query query={GET_USERS} fetchPolicy="cache-and-network" errorPolicy="all">
      {({refetch, loading, error, data = {}}) => {

        const {allUsers = []} = data

        return (
          <List dataArray={allUsers}
                renderRow={(item) => <UserItem item={item}/>}/>
        )
      }}
    </Query>
  )
}

const UserItem = ({item}) => {
  return (
    <ListItem>
      <Body>
      <Text>{item.name}</Text>
      <Text note>{(new Date(item.dateOfBirth)).toString()}</Text>
      </Body>
    </ListItem>
  )
}


