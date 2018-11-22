import React from 'react'
import {Text} from 'react-native'
import {ListItem, List as NbList, Body, Right} from 'native-base'
import moment from 'moment'

import {DeleteUserButton} from './DeleteUserButton'
import {AppContext} from './Context'

export class List extends React.Component {


  render() {
    return (
      <AppContext.Consumer>
        {({users, userService, setUsers}) => {
          return (
            <NbList dataArray={users}
                    renderRow={(item) => <UserItem {...{item, userService, setUsers}}/>}/>
          )
        }}

      </AppContext.Consumer>
    )
  }
}

const update = async ({item, userService, setUsers}) => {
  item.name = `${item.name}_u`
  await userService.repository.update({docId: item._id, data: item})
  await setUsers() //TODO: should get the proper filter
}

const UserItem = ({item, userService, setUsers}) => {

  return (
    <ListItem onPress={() => update({item, userService, setUsers})}>
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

