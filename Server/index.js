require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');

const DB_QUERY_STRING = process.env.DB

const exampleeRoutes = require('./routes/example')
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 8079)

mongoose.connect(DB_QUERY_STRING)

app.get('/', (req, res) => {
  res.send('Example API HOME PAGE 💩')
})

app.use('/example', exampleeRoutes)


app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened 💩 ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



