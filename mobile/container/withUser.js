import {compose, withHandlers, withState} from 'recompose'
import {UserRepository} from '../service/UserRepository'


export const withUser = (options = {}) => {

  const repository = new UserRepository()
  const commonSetUsers = async (setUsers, where = {}) => {
    const users = await repository.find({where})
    setUsers(users)
  }

  const state = withState('users', 'setUsers', [])
  const handlers = withHandlers({
      get: ({setUsers}) => async ({where} = {}) => {
        await commonSetUsers(setUsers, where)
      },
      add: ({setUsers}) => async ({data}) => {
        await repository.insert({data})
        await commonSetUsers(setUsers) //TODO: should get the proper filter
      },
      remove: ({setUsers}) => async ({where}) => {
        await repository.delete({where})
        await commonSetUsers(setUsers) //TODO: should get the proper filter
      },
    }
  )

  return compose(
    state,
    handlers
  )

}

