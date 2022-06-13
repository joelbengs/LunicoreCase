//import the path module
const path = require('path')

//get the location of the file "database.sqlite"
const dbPath = path.resolve(__dirname, "db/database.sqliate")

//create connection to the SQLite database. The client parameter specifies that we use sqlite3
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true
  })

//Create a table in the database called "????"
knex.schema
  // Make sure no "employees" table exists
  // before trying to create new
  .hasTable('employees')
    .then((exists) => {
      if (!exists) {
        // If no "employees" table exists
        // create new, with "id", "name", and "sales" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record
        return knex.schema.createTable('employees', (table)  => {
          table.increments('id').primary()
          table.string('name')
          table.integer('sales')
        })
        .then(() => {
          // Log success message
          console.log('Table \'employees\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Just for debugging purposes:
// Log all data in "books" table
knex.select('*').from('employees')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex