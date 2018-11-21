import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/sync', (req, res) => {

  const data = req.body
  console.log(data, 'data')

  res.json(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
