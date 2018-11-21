import {Base} from './Base'
import {userDb} from '../../config/pouchDb'

export class User extends Base {

  constructor() {

    super({db: userDb})


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


}
