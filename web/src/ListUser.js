import React from 'react'
import {Query} from 'react-apollo'
import {Button, Table} from 'react-bootstrap'
import moment from 'moment'
import {GET_USERS} from './queries'

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

const UserItem = ({item}) => {

  return (
    <tr>
      <td>{item.name}</td>
      <td>{moment(item.dateOfBirth).format('d-MMM-YYYY  h:mm:ss.S a')}</td>
    </tr>
  )
}


//Ryla Escalona Manalo
