const db = require('../user-db.js');

//POST - create new account
exports.userCreate = async(req, res) => {
  const name = req.body.username;
  const pass = req.body.password;
    db.run("INSERT INTO user (username, password) VALUES ($username, $password)", {$username: name, $password: pass}, function(error) {
      if(error) {
        if(error.errno == 19) { //non-unique username
          //res.status = 400;     //Want to return the error and reject the request!
          //res.ok = false;
          //return Promise.reject(error);
          //throw new Error('BROKEN');
        }
        console.log(error)  //other error
        return null;
      }
      console.log(this.lastID);
      db.get("SELECT * FROM user WHERE id = $lastID", {$lastID: this.lastID}, (error, rows) => {console.log(rows)}) //gets the newly added row and logs it
    })
      res.send({
        token: 'test123'
      });
    }

//POST - login, (MVP while building frontend)
exports.userLogin = async(req, res) => {
    res.send({
      token: 'test123'
    });
  }