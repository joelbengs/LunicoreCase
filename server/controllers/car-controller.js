const knex = require('../db.js');

//GET all cars
exports.carAll = async(req, res) => {
    knex.select('*').from('car').then(userData => {
        res.json(userData)
    })
    .catch(err => {
        res.json({ message: 'There was an error retriveing all car: ${err}'});
    });
};

//POST car
exports.carCreate = async(req, res) => {
    knex('car').insert({
        'id': req.body.id,
        'brand': req.body.brand,
        'model': req.body.model,
        'price': req.body.price
    })
    .then(() => {
        // Send a success message in response
        res.json({ message: `from car-controller: car \'${req.body.brand}, ${req.body.model}, ${req.body.price}\' created.`});
    })
    .catch(err => {
        // Send a error message in response
        res.json({ message: `from car-controller: There was an error creating the car \'${req.body.brand}, ${req.body.model}, ${req.body.price}\' ${err}`});
    })
};

//DELETE car, and return it (return is not functioning here)
exports.carDelete = async(req, res) => {
    knex('car').where('id', req.body.id)
    .del()
    .then(userData => {
        res.json(userData)
        //res.json({ message: `Car ${req.body.id} deleted.` })
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.id} car: ${err}` })
      })
  }