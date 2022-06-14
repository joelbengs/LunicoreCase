const express = require('express');
const router = express.Router();
const carController = require('../controllers/car-controller.js');

//GET car *required
router.get('/all', carController.carAll);

//POST car *required
router.post('/create', carController.carCreate);

//DELETE car *required

//UPDATE car




module.exports = router;
