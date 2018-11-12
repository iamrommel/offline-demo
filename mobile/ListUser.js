import React from 'react'
import {Text, RefreshControl} from 'react-native'
import {Query, withApollo} from 'react-apollo'
import {ListItem, List, Body, Left, Content} from 'native-base'
import moment from 'moment'

import {GET_USERS} from './queries'
import {DeleteUserButton} from './DeleteUserButton'

//fetchPolicy="cache-and-network" errorPolicy="all"

let ListUser = ({client}) => {
  return (
    <Query query={GET_USERS}>
      {({refetch, loading, error, data = {}}) => {
        const {allUsers = []} = data
        return (
          <Content refreshControl={<RefreshControl onRefresh={refetch} refreshing={loading}/>}>
            <List dataArray={allUsers}
                  renderRow={(item) => <UserItem {...{item, client}}/>}/>
          </Content>
        )
      }}
    </Query>
  )
}
ListUser = withApollo(ListUser)
export {ListUser}


const UserItem = ({item, client}) => {
  return (
    <ListItem>
      <Body>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      <Text note>{moment(new Date(item.dateOfBirth)).format('hh:mm:ss.SSS a')}</Text>
      </Body>
      <Left>
        <DeleteUserButton {...{data: item, client}}/>
      </Left>
    </ListItem>
  )
}

