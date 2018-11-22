import {Base} from './Base'
import {User as UserPouchRepository} from './pouchdbRepository/User'


export class User extends Base {
  constructor() {
    const repositoryFactory = () => new UserPouchRepository()
    super({repositoryFactory})
  }

  sync = async () => {
    const result = await this.repository.db.syncToAnything((docs) => {
      console.log(JSON.stringify(docs), 'sync data this')

    }, {sync_id: 'user_replication', batch_size: 10})

    console.log(result)

  }

}

