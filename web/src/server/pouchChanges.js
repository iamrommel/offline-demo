import PouchDB from 'pouchdb'


//the password and username must be url encoded
const couchDbUrl = 'https://admin:Abc12345%23@totalmilkcouch.cdd-beta.totalmilk.com/tickets'

export const getChanges = () => {

  console.log('get changes')
  const db = new PouchDB(couchDbUrl)

  db.changes({
    since: 'now',
    live: true,
    include_docs: true
  })
    .on('change', function (info) {
      console.log('changewith info' + JSON.stringify(info.doc))
    })
    .on('complete', (info) => {
      console.log('Done sync here with info' + JSON.stringify(info))
    })
    .on('error', (err) => {
      console.log('something went wrong along hte way')
    })
    .on('paused', (err) => {
      console.log('user went offline ' + JSON.stringify(err))
    })
    .on('active', () => {
      console.log('user went online')
    })

}
