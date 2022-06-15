const knex = require('../db.js');

//GET all
exports.saleAll = async(req, res) => {
    knex.select('*').from('car').then(userData => {
        res.json(userData)
    })
    .catch(err => {
        res.json({ message: 'There was an error retriveing all car: ${err}'});
    });
};

//POST
exports.saleCreate = async(req, res) => {
    knex('sale').insert({
        'employee_id': req.body.employee_id,
        'carmodel_id': req.body.carmodel_id
    })
    .then(() => {
        // Send a success message in response
        res.json({ message: `from sale-controller: sale with employee_id: \'${req.body.employee_id} and carmodel_id: ${req.body.carmodel_id}\' created.`});
    })
    .catch(err => {
        // Send a error message in response
        res.json({ message: `from sale-controller: There was an error creating the sale with employee_id: \'${req.body.employee_id} and carmodel_id: ${req.body.carmodel_id}\': ${err}`});
    })
};