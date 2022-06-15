import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { EmployeeList } from './employee-list'
import { LoadEmployee } from './employee-load-data'

export const Employee = () => {
  // Prepare states
  const [employees, setEmployee] = useState([])
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [sale, setSale] = useState('')
  const [loading, setLoading] = useState(true)

  // Fetch all employee on initial render and every state change
  useEffect(() => {
    fetchEmployee()
  }, [])

  // Fetch all employees and total sales
  const fetchEmployee = async () => {
    axios.get('http://localhost:4001/employee/total_sales')
      .then(response => {
        setEmployee(response.data)
        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the employee list: ${error}`))
  }

  // Reset all input fields
  const handleInputsReset = () => {
    setName('')
    setId('')
    setSale('')
  }

  // Create new employee
  const handleEmployeeCreate = () => {
    // Send POST request to 'books/create' endpoint
    axios
      .post('http://localhost:4001/employee/create', {
        id: id,  
        name: name,
        sale: sale,
      })
      .then(res => {
        console.log(res.data)
        fetchEmployee()
      })
      .catch(error => console.error(`There was an error creating the ${name} employee: ${error}`))
  }

 // Submit new employee
 const handleEmployeeSubmit = () => {
    if (id.length > 0 && name.length > 0 && sale.length > 0) {
      handleEmployeeCreate()
      console.info(`Employee ${name} with sales of ${sale} added.`)
      handleInputsReset()
    }
  }

  // Remove employee
  const handleEmployeeRemove = (id: number) => {
    // Send PUT request to 'books/delete' endpoint
    axios
      .put('http://localhost:4001/employee/delete', { id: id })
      .then(() => {
        console.log(`Employee ${id} removed.`)
        fetchEmployee()
      })
      .catch(error => console.error(`There was an error removing the ${id} employee: ${error}`))
  }

  return (
    <div className="employee-wrapper">
      
      {/* Render  list component */}
      <EmployeeList employees={employees} loading={loading} handleEmployeeRemove={handleEmployeeRemove} />
      
      {/* Form for creating new employee */}
      <div className="employee-form">
        <div className="form-wrapper" onSubmit={handleEmployeeSubmit}>
          <div className="form-row">
          <fieldset>
              <label className="form-label" >Enter id: </label>
              <input className="form-input" type="number" id="id" name="id" value={id} onChange={(e) => setId(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" >Enter name: </label>
              <input className="form-input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" >Enter total sales: </label>
              <input className="form-input" type="number" id="sale" name="sale" value={sale} onChange={(e) => setSale(e.currentTarget.value)} />
            </fieldset>
          </div>
        </div>

        <button onClick={handleEmployeeSubmit} className="btn btn-add">Add the employee</button>
      </div>
      <LoadEmployee></LoadEmployee>
    </div>
  )
}