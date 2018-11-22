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

  async componentDidMount() {
    await this.setUsers()
  }

  render() {
    const {users,} = this.state
    const {userService, setUsers} = this
    return (
      <AppContext.Provider value={{users, userService, setUsers}}>
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



