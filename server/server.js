//import depencencies
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

//import routes
const employeeRouter = require('./routes/employee-routes.js')
const carRouter = require('./routes/car-routes.js')
const saleRouter = require('./routes/sale-routes.js')

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

// Implement employees route. This is where every request that has localhost:4001/employee gets sent
app.use('/employee', employeeRouter)

// Implement car route. This is where every request that has localhost:4001/car gets sent
app.use('/car', carRouter)

// Implement sale route. This is where every request that has localhost:4001/sale gets sent
//app.use('/sale', saleRouter)

// Implement login route. This is where every request that has localhost:4001/login gets sent
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

// Implement 500 error route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken. (server.js 500)')
  })

// Implement 404 error route
app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that. (sever.js 404)')
  })

// Start express app
app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}, (server.js)`)
  })