import _ from 'lodash'
import {RepositoryBase} from './RepositoryBase'
import {userDb} from '../config/pouchDb'


export class UserRepository extends RepositoryBase {
  constructor() {
    super(new UserWebServiceRepository(), new UserPouchRepository())
  }


}

class UserWebServiceRepository {
  find = async ({where}) => {
    //factory where to get the data
    return [{id: 'web service id', name: 'web service name'}]
  }

}


//NOTE: This can inherit from PouchRepositoryBase
class UserPouchRepository {

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

  findOne = async ({where}) => {
    const docs = await this.find({where})

    //return the first item, of undefined if it cannot find
    return _.get(docs, '[0]')

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

  delete = async ({where}) => {
    try {
      const doc = await this.findOne({where})
      if (!doc)
        throw new Error('Cannot find the document to delete!')

      //if found do the deletion
      return this.db.remove(doc)

    } catch (err) {
      console.log(err)
    }
  }

  update = async ({where, data}) => {
    let doc = await this.findOne({where})

    //remove the _id from data before merging
    delete data._id

    //this will mutate the doc
    _.merge(doc, data)

    return this.db.put(doc)
  }

  sync = async () => {
    let docIds = []
    const result = await this.db.syncToAnything((docs) => {
      console.log(JSON.stringify(docs), 'sync data this')

    }, {sync_id: 'user_replication', batch_size: 10})

    console.log(result)

  }


}

