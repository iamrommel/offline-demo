import React from 'react'
import {Container, Header, Left, Body, Title, Right, Content} from 'native-base'

import {List} from './List'
import {AddUserButton} from './AddUserButton'
import {AppContext} from './Context'
import {UserRepository} from '../../service/UserRepository'
import {SyncButton} from './SyncButton'

export class Manage extends React.Component {
  state = {users: []}

  constructor(props) {
    super(props)
    this.repository = new UserRepository()
  }

  setUsers = async (where = {}) => {
    const users = await this.repository.find({where})
    this.setState({users})
  }

  add = async ({data}) => {
    await this.repository.insert({data})
    await this.setUsers() //TODO: should get the proper filter
  }

  remove = async ({where}) => {
    await this.repository.delete({where})
    await this.setUsers() //TODO: should get the proper filter
  }

  sync = async () => {
    await this.repository.sync()
  }

  async componentDidMount() {
    await this.setUsers()
  }

  render() {
    const {users,} = this.state
    const {add, remove, sync} = this
    return (
      <AppContext.Provider value={{users, add, remove, sync}}>
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



