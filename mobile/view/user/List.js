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
        {({users, update}) => {
          return (
            <NbList dataArray={users}
                    renderRow={(item) => <UserItem {...{item, update}}/>}/>
          )
        }}

      </AppContext.Consumer>
    )
  }

}


const UserItem = ({item, update}) => {
  return (
    <ListItem onPress={() => update(item)}>
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

