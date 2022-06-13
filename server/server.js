//import depencencies
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

//import routes
const employeesRouter = require('./routes/employees-routes.js')

// Set default port for express app
const PORT = process.env.PORT || 4001

//create the express app
const app = express()

// Apply middleware
// Note: Keep this at the top, above routes
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Implement employees route
app.use('/employees', employeesRouter)

// Implement 500 error route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken.')
  })

// Implement 404 error route
app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
  })

// Start express app
app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`)
  })