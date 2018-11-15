import React from 'react'
import {Text, RefreshControl} from 'react-native'
import {ListItem, List, Body, Right, Content} from 'native-base'
import moment from 'moment'

import {DeleteUserButton} from './DeleteUserButton'
import {UserRepository} from './service/UserRepository'

export class ListUser extends React.Component {
  state = {allUsers:[]}

  async componentDidMount() {
    const repository = new UserRepository()

    const allUsers = await repository.find({where: {name: '1'}})

    this.setState({allUsers})

  }

  //refreshControl={<RefreshControl onRefresh={refetch} refreshing={loading}/>}

  render() {
    const {allUsers} = this.state

    return (
      <Content>
        <List dataArray={allUsers}
              renderRow={(item) => <UserItem {...{item}}/>}/>
      </Content>
    )
  }

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

