import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SaleList } from './sale-list'

export const Sale = () => {
  // Prepare states
  const [employees, setEmployee] = useState([])
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
      .catch(error => console.error(`There was an error retrieving the employee list with sales: ${error}`))
  }

  return (
    <div className="employee-wrapper">
      {/* Render  list component */}
      <SaleList employees={employees} loading={loading} />
    </div>
  )
}