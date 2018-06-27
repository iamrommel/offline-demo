import React from 'react'
import {Query} from 'react-apollo'
import {Button, ButtonGroup, Table} from 'react-bootstrap'
import moment from 'moment'
import {Utils} from 'pcmli.umbrella.uni-core'
import {withApollo} from 'react-apollo'

import {GET_USERS, DELETE_USER, UPDATE_USER} from './queries'

export const ListUser = () => {
  return (
    <Query query={GET_USERS} fetchPolicy="cache-and-network" errorPolicy="all">
      {({refetch, loading, error, data = {}}) => {

        const {allUsers = []} = data
        if (error) return <p>`Error! ${error.message}`</p>

        return (
          <div>
            <Table striped bordered condensed hover>
              <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {allUsers.map((item, key) => <UserItem key={key}  {...{item}} />)}
              </tbody>
            </Table>
            <Button bsStyle="success" onClick={() => refetch()}>Refresh</Button>
          </div>
        )
      }}
    </Query>
  )
}

let UserItem = ({item, client}) => {
  const onUpdate = () => {
    const variables = {name: `${item.name}_${Utils.generateId(3)}`, dateOfBirth: new moment(), id: item.id}

    const optimisticResponse = {
      __typename: 'Mutation',
      updateUser: {
        __typename: 'User',
        ...variables
      }
    }

    client.mutate({mutation: UPDATE_USER, variables, optimisticResponse})
  }
  const onDelete = () => {
    const variables = {id: item.id}
    client.mutate({mutation: DELETE_USER, variables})
  }

  return (
    <tr>
      <td>{item.name}</td>
      <td>{moment(item.dateOfBirth).format('d-MMM-YYYY  h:mm:ss.S a')}</td>
      <td>
        <ButtonGroup>
          <Button bsStyle="warning" onClick={onUpdate}>Update</Button>
          <Button bsStyle="danger" onClick={onDelete}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  )
}

UserItem = withApollo(UserItem)


