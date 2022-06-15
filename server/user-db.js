const { default: FormRange } = require('react-bootstrap/esm/FormRange');
const sqlite = require('sqlite3');
const db = sqlite.Database('./db/userdatabase.sqlite'); //I might need "new" here

db.serialize(() => { 
    db.run('DROP TABLE IF EXISTS user', error => {
      if (error) {
        throw error;
      }
    });
    
    db.run('CREATE TABLE user (id INTEGER PRIMARY KEY, username TEXT NOT NULL UNIQUE, password TEXT NOT NULL)', error => {
        if (error) {
          throw error;
        }
      });
});

db.run("INSERT INTO user (id, username, password) VALUE (1, 'John', 'mypassword')", function(error) {
    console.log(this.lastID);
})

//db.each("SELECT * FROM user", (error, row) => {
//    console.log(row);
//})

// Export the database
module.exports = db