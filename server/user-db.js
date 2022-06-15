const path = require('path')
const dbPath = path.resolve(__dirname, "db/userbase.sqlite")
const sqlite = require('sqlite3');
const db = new sqlite.Database(dbPath);

//Create the user table. Drop it if it allready exists
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
 
    //Make a first insert to the table and log it, for debugging purposes
    db.run("INSERT INTO user (username, password) VALUES ('Joel', 'Bengs')", function(error) {
      if(error) {
        console.log(error);
        return null;
      }
      console.log(this.lastID);
      db.get("SELECT * FROM user WHERE id=$lastID", {$lastID: this.lastID}, (error, rows) => {console.log(rows)})
    }) 
});

// Export the database
module.exports = db