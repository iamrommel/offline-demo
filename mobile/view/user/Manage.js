import React from 'react'
import {Container, Header, Left, Body, Title, Right, Content} from 'native-base'

import {List} from './List'
import {withUser} from '../../container/withUser'
import {AddUser} from './AddUser'
import {AppContext} from './Context'


export class Manage extends React.Component {

  async componentDidMount() {
    const {get} = this.props
    await get()
  }

  render() {

    const {users, add, remove} = this.props

    return (
      <AppContext.Provider value={{users, add, remove}}>
        <Container>
          <Header>
            <Left>
              <AddUser/>
            </Left>
            <Body>
            <Title>User List</Title>
            </Body>
            <Right>

            </Right>
          </Header>
          <Content>
            <List {...{users, remove}}/>
          </Content>
        </Container>
      </AppContext.Provider>
    )
  }
}


Manage = withUser()(Manage)
