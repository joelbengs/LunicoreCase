const knex = require('../db.js');

//create user

//verify login, with or without access to dashboard
exports.userLogin = async(req, res) => {
    res.send({
      token: 'test123'
    });
  }