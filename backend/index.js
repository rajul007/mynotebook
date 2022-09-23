const connectToMongo = require('./db');

connectToMongo();


const express = require('express')
var cors = require('cors')

const app = express()
const port = 5000


app.use(cors())

// Middleware (To use req.body)
app.use(express.json());


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`MyNotebook backend listening at http://localhost:${port}`)
})