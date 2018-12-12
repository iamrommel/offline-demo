import {Base} from './Base'
import {User as UserPouchRepository} from './pouchdbRepository/User'



export class User extends Base {
  constructor() {
    const repositoryFactory = () => new UserPouchRepository()
    super({repositoryFactory})
  }

}

