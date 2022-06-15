const express = require('express');
const router = express.Router();
const carController = require('../controllers/car-controller.js');

//GET car
router.get('/all', carController.carAll);

//POST car
router.post('/create', carController.carCreate);

//DELETE car
//ugly workaround as axios.delete did not allow for body of id to be sent
router.put('/delete', carController.carDelete)

module.exports = router;
