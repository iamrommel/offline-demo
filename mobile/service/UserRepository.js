import {RepositoryBase} from './RepositoryBase'

export class UserRepository extends RepositoryBase {
  constructor() {
    super(new UserWebServiceRepository(), new UserSqliteRepository())
  }

  // static async createInstance() {
  //   const o = new UserRepository()
  //   o.repository = await o.onlineOfflineRepositoryFactory(new UserWebServiceRepository(), new UserSqliteRepository())
  //   return o
  // }

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
    return [
      {id: 'SQL Lite id 1', name: 'SQL Lite name 1', dateOfBirth : '2004-11-10T07:10:41Z'},
      {id: 'SQL Lite id 2', name: 'SQL Lite name 2', dateOfBirth : '2002-10-10T17:17:23Z'}
      ]
  }
}

