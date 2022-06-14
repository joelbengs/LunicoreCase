const knex = require('../db.js');
const router = require('../routes/employee-routes.js');

exports.carAll = async(req, res) => {
    knex.select('*').from('car').then(userData => {
        res.json(userData)
    })
    .catch(err => {
        res.json({ message: 'There was an error retriveing all car: ${err}'});
    });
};

exports.carCreate = async(req, res) => {
    knex('car').insert({
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