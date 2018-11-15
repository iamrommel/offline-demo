import React from 'react'
import {Text, RefreshControl} from 'react-native'
import {ListItem, List as NbList, Body, Right, Content} from 'native-base'
import moment from 'moment'

import {DeleteUserButton} from './DeleteUserButton'

export class List extends React.Component {

  //refreshControl={<RefreshControl onRefresh={refetch} refreshing={loading}/>}

  render() {
    const {users=[]} = this.props

    return (
        <NbList dataArray={users}
              renderRow={(item) => <UserItem {...{item}}/>}/>
    )
  }

}


const UserItem = ({item}) => {
  return (
    <ListItem>
      <Body>
      <Text>{item._id}</Text>
      <Text>{item.name}</Text>
      <Text note>{moment(new Date(item.dateOfBirth)).format('hh:mm:ss.SSS a')}</Text>
      </Body>
      <Right>
        <DeleteUserButton {...{data: item}}/>
      </Right>
    </ListItem>
  )
}

