import React from 'react'
import {Container, Header, Left, Body, Title, Right, Content} from 'native-base'

import {List} from './List'
import {UserRepository} from '../../service/UserRepository'


export class Manage extends React.Component {

  constructor() {
    super()
    this.repository = new UserRepository()
  }

  state = {users: []}

  get = async () => {
    const users = await this.repository.find()
    this.setState({users})
  }

  add = async () => {
  }
  delete = async () => {
  }


  async componentDidMount() {
    await this.get()
  }


  render() {

    const {users} = this.state

    return (
      <Container>
        <Header>
          <Left>

          </Left>
          <Body>
          <Title>User List</Title>
          </Body>
          <Right>

          </Right>
        </Header>
        <Content>
          <List {...{users}}/>
        </Content>
      </Container>
    )
  }
}


