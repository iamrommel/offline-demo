import gql from 'graphql-tag'

export const ADD_USER = gql`
mutation createUser($name: String, $dateOfBirth : DateTime ) {
  createUser(dateOfBirth: $dateOfBirth, name: $name) {
    id
    name
    dateOfBirth
  }
}
`

export const GET_USERS = gql`
 query allUsers {
  allUsers {
		dateOfBirth
    name
    id
  }
}
`

export const DELETE_USER = gql`
mutation deleteUser($id: ID! )  {
  deleteUser(id: $id) {
    dateOfBirth
    id
    name
  }
}
`

export const UPDATE_USER = gql`
mutation updateUser($dateOfBirth: DateTime, $id: ID!, $name: String) {
  updateUser(dateOfBirth: $dateOfBirth, id: $id, name: $name) {
    dateOfBirth
    id
    name
  }
}
`

export const generateId = (length = 8) => {
  let result = ''
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = length; i > 0; i -= 1) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}
