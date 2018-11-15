import {RepositoryBase} from './RepositoryBase'
import {userDb} from '../config/pouchDb'


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

  constructor() {
    this.db = userDb

    //ignore the result of seed
    this.seed()

    this.createIndex()
  }

  createIndex = () => {
    this.db.createIndex({
      index: {fields: ['name', 'dateOfBirth']}
    })
  }
  seed = async () => {
    //seed only if there is empty values
    const allDocs = await this.db.allDocs()

    if (allDocs.total_rows === 0) {
      const docs = [
        {_id: '1', name: 'Local name 1', dateOfBirth: '2004-11-10T07:10:41Z'},
        {_id: '2', name: 'Local name 2', dateOfBirth: '2002-10-10T17:17:23Z'}
      ]
      await this.db.bulkDocs(docs)

      console.log('Done seeding for User Repository')

    }

  }

  find = async ({where}) => {

    where = where || {name: {$gte: null}}
    const options = {selector: where}

    const result = await this.db.find(options)

    //get the docs or empty array
    const {docs = []} = result || {}
    return docs
  }

  insert = async ({data}) => {
    return this.db.put(data)
  }

}

