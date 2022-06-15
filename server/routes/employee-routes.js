const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee-controller.js');

// Add route for GET request to retrieve all employees
// In server.js, employees route is specified as '/employees'
// this means that '/all' translates to '/employees/all in the URI'
router.get('/all', employeeController.employeeAll);

//GET employees and total sales 
router.get('/total_sales', employeeController.employeeTotalSales);

//POST request to create new employee
router.post('/create', employeeController.employeeCreate);

//DELETE request to delete an employee (ugly axios work around with put for MVP)
router.put('/delete', employeeController.employeeDelete);

//Export router
module.exports = router