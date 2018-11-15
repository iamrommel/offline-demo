import {compose, withHandlers, withStateHandlers} from 'recompose'
import {UserRepository} from '../service/UserRepository'


export const withUser = (options) => {

  const repository = new UserRepository()

  return compose(
    withStateHandlers({users: []},
      {
        get: ({users}) => async ({where}={}) => {
          users = await repository.find({where})
        },
        add: ({users}) => async ({data}) => {
          await repository.insert({data})
          users = await repository.find()
        },
        remove: ({users}) => async ({where}) => {
          await repository.insert({where})
          users = await repository.find()
        },
      }
    )
  )

}

