import _ from 'lodash'
import PouchDB from 'pouchdb-react-native'
import '../../config/pouchDb' //just need to import it to run the plugins setup


export class Base {

  constructor({dbName}) {
    if (!dbName) throw new Error('dbName is required when creating repository')
    this.dbName = dbName
    this.db = new PouchDB(dbName)

    //
    // this.db.changes({
    //   since: 'now',
    //   live: true,
    //   include_docs: true
    // }).on('change', () => {
    //
    //
    //
    //
    //
    // });
  }


  findOne = async ({where}) => {
    const docs = await this.find({where})

    //return the first item, of undefined if it cannot find
    return _.get(docs, '[0]')

  }

  findById = async (docId, options) => {
    options = options || {latest: true}
    return this.db.get(docId, options)
  }

  find = async ({where}) => {

    where = where || {name: {$gte: null}}
    const options = {selector: where}

    const result = await this.db.find(options)

    //get the docs or empty array
    const {docs = []} = result || {}
    return docs
  }

  findAndThrow = async ({where, docId}) => {
    let doc = null
    if (docId)
      doc = await this.findById(docId)
    else
      doc = await this.findOne({where})

    if (!doc)
      throw new Error('Cannot find the document to delete!')

    return doc
  }

  insert = async ({data}) => {
    return this.db.put(data)
  }

  remove = async ({where, docId}) => {

    const doc = await this.findAndThrow({where, docId})

    //if found do the deletion
    return this.db.remove(doc)


  }

  update = async ({where, data, docId}) => {
    const doc = await this.findAndThrow({where, docId})

    //remove the _id from data before merging
    delete data._id

    //this will mutate the doc
    _.merge(doc, data)

    return this.db.put(doc)
  }

  clearDb = async () => {
    try {
      await this.db.destroy()
      this.db = new PouchDB(this.dbName)
      return {destroyed: true}
    } catch (e) {
      return {error: e}
    }
  }
}
