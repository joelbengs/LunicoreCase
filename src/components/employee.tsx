// Import deps
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// Import subcomponents
import { EmployeeList } from './employee-list'
// Import styles
//import './../styles/bookshelf.css'

// Create Bookshelf component
export const Employee = () => {
  // Prepare states
  const [name, setName] = useState('')
  const [sales, setSales] = useState('')
  const [employees, setEmployee] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch all employee on initial render and every state change
  useEffect(() => {
    fetchEmployee()
  }, [])

  // Fetch all books
  const fetchEmployee = async () => {
    // Send GET request to 'books/all' endpoint
    axios.get('http://localhost:4001/employee/all')
      .then(response => {
        // Update the books state
        setEmployee(response.data)
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
      .post('http://localhost:4001/employee/create', {
        name: name,
        sales: sales
      })
      .then(res => {
        console.log(res.data)
        // Fetch all books to refresh
        // the books on the bookshelf list
        fetchEmployee()
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
        fetchEmployee()
      })
      .catch(error => console.error(`There was an error removing the ${name} employee: ${error}`))
  }

  return (
    <div className="employee-wrapper">
      {/* Form for creating new employee */}
      <div className="employee-form">
        <div className="form-wrapper" onSubmit={handleEmployeeSubmit}>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="name">Enter name: </label>
              <input className="form-input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="sales">Enter sales: </label>
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