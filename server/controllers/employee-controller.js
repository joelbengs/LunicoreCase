//This controller will recieve reqeuests related to the employee table in the database
//it uses knex to interact with SQLite

// Import database
const knex = require('../db');

//GET all employees, without sale
exports.employeeAll = async(req, res) => {
    knex.select('id').select('name')
    .from('employee')
    .then(userData => {
        res.json(userData)
    })
    .catch(err => {
        res.json({ message: `There was an error retrieving all employee: ${err}` })
    })
};

//GET all employees with sales
exports.employeeTotalSales = async(req, res) => {
    knex.select('*')
    .from('employee')
    .then(userData => {
        res.json(userData)
    })
    .catch(err => {
        res.json({ message: `There was an error retrieving total sales: ${err}` })
    })
};

//POST employee
exports.employeeCreate = async(req, res) => {
    knex('employee')
    .insert({
        'id': req.body.id,
        'name': req.body.name,
        'sale': req.body.sale || 0
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

//DELETE employee, without returning it
exports.employeeDelete = async(req, res) => {
    knex('employee').where('id', req.body.id)
    .del()
    .then(() => {
        // Send a success message in response
        res.json({ message: `Employee ${req.body.id} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.id} employee: ${err}` })
      })
  }