import PouchDB from 'pouchdb-react-native'
import PouchdbFind from 'pouchdb-find'
import pouchAnything from 'pouchdb-sync-to-anything'

PouchDB.plugin(PouchdbFind);
PouchDB.plugin(pouchAnything)
