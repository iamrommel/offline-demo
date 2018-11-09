import React from 'react'
import {Text, RefreshControl} from 'react-native'
import {Query, withApollo} from 'react-apollo'
import {ListItem, List, Body, Left, Content} from 'native-base'
import moment from 'moment'

import {GET_USERS} from './queries'
import {ListView} from 'react-native'
import {DeleteUserButton} from './DeleteUserButton'

//fetchPolicy="cache-and-network" errorPolicy="all"

let ListUser = ({client}) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
  return (
    <Query query={GET_USERS} fetchPolicy="cache-and-network" errorPolicy="all">
      {({refetch, loading, error, data = {}}) => {
        const {allUsers = []} = data
        return (
          <Content refreshControl={<RefreshControl onRefresh={refetch} refreshing={loading}/>}>
            <List
              dataSource={ds.cloneWithRows(allUsers)}
              rightOpenValue={-75}
              renderRightHiddenRow={(data, secId, rowId, rowMap) => <DeleteUserButton {...{
                data,
                client,
                secId,
                rowId,
                rowMap
              }}/>}
              renderRow={(item) => <UserItem item={item}/>}/>
          </Content>
        )
      }}
    </Query>
  )
}
ListUser = withApollo(ListUser)
export {ListUser}


const UserItem = ({item}) => {
  return (
    <ListItem>
      <Body>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      </Body>
      <Left>
        <Text note>{moment(new Date(item.dateOfBirth)).format('hh:mm:ss.SSS a')}</Text>
      </Left>
    </ListItem>
  )
}

