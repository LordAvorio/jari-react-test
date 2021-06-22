const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('./public'))

const db = require('./database')

const {
    customerRouter
} = require('./routers')

app.use('/customer', customerRouter)

db.connect((err) => {
    if (err) return console.log('error connecting')
    console.log('connected as id' + db.threadId)
})

app.get('/', (req, res) => {
    res.status(200).send('<h1>Test masuk route utama</h1>')
})

const port = 2000
app.listen(port, () => console.log('Connected to Port = ' + port))