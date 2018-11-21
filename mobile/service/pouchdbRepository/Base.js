import _ from 'lodash'

export class Base {

  constructor({db}) {
    if (!db) throw new Error('Db is required when creating repository')
    this.db = db
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

  delete = async ({where, docId}) => {

    const doc = this.findAndThrow({where, docId})

    //if found do the deletion
    return this.db.remove(doc)


  }

  update = async ({where, data, docId}) => {
    const doc = this.findAndThrow({where, docId})

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
