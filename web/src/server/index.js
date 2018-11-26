import express from 'express'
import bodyParser from 'body-parser'
import PouchDB from 'pouchdb';

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/pouch', require('express-pouchdb')(PouchDB));

app.post('/sync', (req, res) => {

  const data = req.body
  console.log(data, 'data')

  res.json(data)
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
