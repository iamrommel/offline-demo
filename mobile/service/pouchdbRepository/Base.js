import _ from 'lodash'
import PouchDB from 'pouchdb-react-native'
import {AsyncStorage} from 'react-native'

import '../../config/pouchDb' //just need to import it to run the plugins setup

export class Base {

  constructor({dbName}) {
    if (!dbName) throw new Error('dbName is required when creating repository')
    this.dbName = dbName
    this.db = new PouchDB(dbName)
    this.key = 'last_seq_' + this.dbName
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
    this._setToUnsync(data)
    return this.db.put(data)
  }

  remove = async ({where, docId}) => {

    const doc = await this.findAndThrow({where, docId})

    //if found do the deletion
    return this.db.remove(doc)


  }

  _setToUnsync = (doc) => {
    doc.isSync = false
    return doc
  }

  update = async ({where, data, docId}) => {
    const doc = await this.findAndThrow({where, docId})

    //remove the _id from data before merging
    delete data._id

    //this will mutate the doc
    this._setToUnsync(doc)
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

  sync = async ({url}) => {

    //get the last sequence that was stored from locally
    let lastSeq = (await AsyncStorage.getItem(this.key)) || 0

    const pouchChanges = await this.db.changes({
      since: lastSeq,
      include_docs: true
    })

    const {results, last_seq} = pouchChanges || {}

    if (!_.isEmpty(results)) {
      return await this._restSync({results, url, last_seq})

    } else {
      console.log('nothing to sync')
      return {success: true, didSync: false}
    }
  }

  syncLive = async ({url}) => {
    //get the last sequence that was stored from locally
    let lastSeq = (await AsyncStorage.getItem(this.key)) || 0

    this.db.changes({
      since: lastSeq,
      live: true,
      include_docs: true
    }).on('change', (change) => {
      console.log(JSON.stringify(change), 'change here')

      const results = [change]
      const last_seq = change.seq

      //ignore the async result
      this._restSync({results, last_seq})

    })
  }

  _restSync = async ({results, url, last_seq}) => {
    const docs = this._getDocsForSync(results)

    //TODO: put some unit test here
    try {
      //sent this to the server
      url = url || 'https://63b2c39b.ngrok.io/sync/tickets'

      //TODO: This should support the time-out for fetch
      let serverResult = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(docs),
      })
      serverResult = await serverResult.json()
      const {success} = serverResult
      if (success) {
        //set this only when success sync
        await AsyncStorage.setItem(this.key, last_seq.toString())
        console.log('done sync')
        return {success: true, didSync: true}
      }
    } catch (e) {
      return {success: false, didSync: true, error: e}
    }
  }

  _getDocsForSync = (results) => {
    //get only the documents, that are not design documents
    return results.map(m => {
      let {doc} = m
      delete doc._rev
      return doc
    }).filter(m => m.language !== 'query')
  }

}
