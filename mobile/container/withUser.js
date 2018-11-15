import {compose} from 'recompose'
import {UserRepository} from '../service/UserRepository'


export const withUser = (options) => {

  const repository = new UserRepository()

  return compose(

  )

}

