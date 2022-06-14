//import the path module
const path = require('path')

//get the location of the file "database.sqlite"
const dbPath = path.resolve(__dirname, "db/database.sqlite")

//create connection to the SQLite database. The client parameter specifies that we use sqlite3
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true
  })

//Create a table in the database called "employee"
  // Make sure no "employee" table exists
  // before trying to create new
      // If no "employee" table exists
        // create new, with "id" and "name"columns
        // and use "id" as a primary identification
        // and increment "id" with every new record
//The knex.SCHEMA is a getter function, which returns a stateful object containing the query.
//Therefore be sure to obtain a new instance of the knex.schema for every query.
//These methods return promises.
knex.schema.hasTable('employee')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('employee', (table)  => {
          table.increments('id').primary();
          table.string('name');
        })
        .then(() => {
          console.log('Table \'employee\' created using knex in db.js')
        })
        .catch((error) => {
          console.error(`There was an error creating table employee in knex in db.js ${error}`)
        })
      }
    })
    .then(() => {
      console.log('Done creating table employee in knex in db.js')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database with knex in db.js: ${error}`)
    })

//Create table in the database called "car"
knex.schema.hasTable('car')
.then((exists) => {
  if (!exists) {
    return knex.schema.createTable('car', (table) => {
      table.increments('id').primary();
      table.string('brand');
      table.string('model');
      table.integer('price');
    }).then(() => {
      console.log('Table \'car\' was created using knex in db.js');
    }).catch((error) => {
      console.error('There was an error creating table \'car\' in db.js');
    });
  }})
  .then(() => {
    console.log('Done creating table \'car\' in db.js')
  })
  .catch((error) => {
    console.error(`There was an error setting up the database with knex in db.js: ${error}`)
  });


// Just for debugging purposes:
// Log all data in tables
knex.select('*').from('employees')
  .then(data => console.log('data from employee table from knex in db.js:', data))
  .catch(err => console.log(err))

knex.select('*').from('car')
  .then(data => console.log('data from car table from knex in db.js:', data))
  .catch(err => console.log(err))  

// Export the database
module.exports = knex