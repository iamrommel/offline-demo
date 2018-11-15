import {RepositoryBase} from './RepositoryBase'

export class UserRepository extends RepositoryBase {
  static async createInstance() {
    const o = new UserRepository()
    o.repository = await o.onlineOfflineRepositoryFactory(new UserWebServiceRepository(), new UserSqliteRepository())

    return o
  }
}

class UserWebServiceRepository {
  find = async ({where}) => {
    //factory where to get the data
    return [{id: 'web service id', name: 'web service name'}]
  }
}

class UserSqliteRepository {
  find = async ({where}) => {
    //factory where to get the data
    return [{id: 'SQL Lite id', name: 'SQL Lite name'}]
  }
}

