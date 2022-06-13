// Import deps
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Import components
import { EmployeeList } from './employees-list'

// Import styles
//import './../styles/bookshelf.css'

// Create Bookshelf component
export const Employee = () => {
  // Prepare states
  const [name, setName] = useState('')
  const [sales, setSales] = useState('')
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch all books on initial render
  useEffect(() => {
    fetchEmployees()
  }, [])

  // Fetch all books
  const fetchEmployees = async () => {
    // Send GET request to 'books/all' endpoint
    axios
      .get('http://localhost:4001/employees/all')
      .then(response => {
        // Update the books state
        setEmployees(response.data)
        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the employee list: ${error}`))
  }

  // Reset all input fields
  const handleInputsReset = () => {
    setName('')
    setSales('')
  }

  // Create new book
  const handleEmployeeCreate = () => {
    // Send POST request to 'books/create' endpoint
    axios
      .post('http://localhost:4001/employees/create', {
        name: name,
        sales: sales
      })
      .then(res => {
        console.log(res.data)
        console.log("HelloWorld from line 54 in handleEmployeeCreate");
        // Fetch all books to refresh
        // the books on the bookshelf list
        fetchEmployees()
      })
      .catch(error => console.error(`There was an error creating the ${name} employee: ${error}`))
  }

 // Submit new book
 const handleEmployeeSubmit = () => {
    // Check if all fields are filled
    if (name.length > 0 && sales.length > 0) {
      // Create new book
      handleEmployeeCreate()

      console.info(`Employee ${name} with sales of ${sales} added.`)

      // Reset all input fields
      handleInputsReset()
    }
  }

  // Remove book
  const handleEmployeeRemove = (id: number, name: string) => {
    // Send PUT request to 'books/delete' endpoint
    axios
      .put('http://localhost:4001/books/delete', { id: id })
      .then(() => {
        console.log(`Employee ${name} removed.`)

        // Fetch all books to refresh
        // the books on the bookshelf list
        fetchEmployees()
      })
      .catch(error => console.error(`There was an error removing the ${name} employee: ${error}`))
  }

  return (
    <div className="book-list-wrapper">
      {/* Form for creating new book */}
      <div className="book-list-form">
        <div className="form-wrapper" onSubmit={handleEmployeeSubmit}>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="title">Enter name:</label>
              <input className="form-input" type="text" id="title" name="title" value={name} onChange={(e) => setName(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="author">Enter sales:</label>
              <input className="form-input" type="number" id="author" name="author" value={sales} onChange={(e) => setSales(e.currentTarget.value)} />
            </fieldset>
          </div>

        </div>

        <button onClick={handleEmployeeSubmit} className="btn btn-add">Add the employee</button>
      </div>

      {/* Render  list component */}
      <EmployeeList employees={employees} loading={loading} handleEmployeeRemove={handleEmployeeRemove} />
    </div>
  )
}