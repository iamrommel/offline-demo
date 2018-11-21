import React from 'react'
import {Container, Header, Left, Body, Title, Right, Content} from 'native-base'

import {List} from './List'
import {AddUserButton} from './AddUserButton'
import {AppContext} from './Context'
import {User as UserService} from '../../service/User'
import {SyncButton} from './SyncButton'

export class Manage extends React.Component {
  state = {users: []}

  constructor(props) {
    super(props)
    this.userService = new UserService()
  }

  setUsers = async (where = {}) => {
    const users = await this.userService.find({where})
    this.setState({users})
  }

  add = async ({data}) => {
    await this.userService.insert({data})
    await this.setUsers() //TODO: should get the proper filter
  }

  remove = async ({where}) => {
    await this.userService.remove({where})
    await this.setUsers() //TODO: should get the proper filter
  }

  update = async (user) => {
    const where = {_id: user._id}
    user.name = `${user.name}_u`
    await this.userService.update({where, data: user})
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
    const {add, remove, sync, update} = this
    return (
      <AppContext.Provider value={{users, add, remove, sync, update}}>
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



