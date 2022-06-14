const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee-controller.js');

// Add route for GET request to retrieve all employees
// In server.js, employees route is specified as '/employees'
// this means that '/all' translates to '/employees/all'
router.get('/all', employeeController.employeeAll);

// Add route for POST request to create new book
router.post('/create', employeeController.employeeCreate);

//Export router
module.exports = router