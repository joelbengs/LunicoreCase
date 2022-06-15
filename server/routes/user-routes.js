const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller.js');

//GET car *required
router.post('/login', userController.userLogin);

//POST car *required
router.post('/create', userController.userCreate);

module.exports = router;
