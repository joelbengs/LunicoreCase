//This controller will recieve reqeuests related to the employee table in the database
//it uses knex to interact with SQLite

// Import database
const knex = require('../db');

//get all employees from database, using asyncronus function.
//req is a json containing data (needed when eq adding employee)
//res is the promise response object
exports.employeeAll = async(req, res) => {
    knex.select('*')
    .from('employee')
    .then(userData => {
        res.json(userData)
    })
    .catch(err => {
        res.json({ message: `There was an error retrieving all employee: ${err}` })
    })
};

exports.employeeCreate = async(req, res) => {
    knex('employee')
    .insert({
        'name': req.body.name
    })
    .then(() => {
        // Send a success message in response
        res.json({ message: `Employee \'${req.body.name}\' created.`})
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error creating ${req.body.name} employee: ${err}`})
      })
  };