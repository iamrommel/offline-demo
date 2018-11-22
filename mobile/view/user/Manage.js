import React from 'react'
import {Container, Header, Left, Body, Title, Right, Content} from 'native-base'

import {List} from './List'
import {AddUserButton} from './AddUserButton'
import {AppContext} from './Context'
import {User as UserService} from '../../service/User'
import {SyncButton} from './SyncButton'
import {ResetDbButton} from './ResetDbButton'

export class Manage extends React.Component {
  state = {users: []}

  constructor(props) {
    super(props)
    this.userService = new UserService()
  }

  setUsers = async (where = {}) => {
    const users = await this.userService.repository.find({where})
    this.setState({users})
  }

  add = async ({data}) => {
    await this.userService.repository.insert({data})
    await this.setUsers() //TODO: should get the proper filter
  }

  remove = async ({where}) => {
    await this.userService.repository.remove({where})
    await this.setUsers() //TODO: should get the proper filter
  }

  update = async (user) => {
    user.name = `${user.name}_u`
    await this.userService.repository.update({docId: user._id, data: user})
    await this.setUsers() //TODO: should get the proper filter
  }

  sync = async () => {
    await this.userService.sync()
  }

  async componentDidMount() {
    await this.setUsers()
  }

  render() {
    const {users,} = this.state
    const {add, remove, sync, update, userService, setUsers} = this
    return (
      <AppContext.Provider value={{users, add, remove, sync, update, userService, setUsers}}>
        <Container>
          <Header>
            <Left>
              <AddUserButton/>
            </Left>
            <Body>
            <Title>User List</Title>
            </Body>
            <Right>
              <SyncButton/>
              <ResetDbButton/>
            </Right>
          </Header>
          <Content>
            <List/>
          </Content>
        </Container>
      </AppContext.Provider>
    )
  }
}



