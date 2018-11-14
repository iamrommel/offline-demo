import React from 'react'
import {Text, RefreshControl} from 'react-native'
import {Query} from 'react-apollo'
import {ListItem, List, Body, Right, Content} from 'native-base'
import moment from 'moment'

import {GET_USERS} from './queries'
import {DeleteUserButton} from './DeleteUserButton'

export const ListUser = () => {
  return (
    <Query query={GET_USERS}>
      {({refetch, loading, error, data = {}}) => {
        const {allUsers = []} = data
        return (
          <Content refreshControl={<RefreshControl onRefresh={refetch} refreshing={loading}/>}>
            <List dataArray={allUsers}
                  renderRow={(item) => <UserItem {...{item}}/>}/>
          </Content>
        )
      }}
    </Query>
  )
}


const UserItem = ({item}) => {
  return (
    <ListItem>
      <Body>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      <Text note>{moment(new Date(item.dateOfBirth)).format('hh:mm:ss.SSS a')}</Text>
      </Body>
      <Right>
        <DeleteUserButton {...{data: item}}/>
      </Right>
    </ListItem>
  )
}

