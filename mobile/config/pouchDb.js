import PouchDB from 'pouchdb-react-native'
import PouchdbFind from 'pouchdb-find'

PouchDB.plugin(PouchdbFind);


export const userDb = new PouchDB('userDb')
