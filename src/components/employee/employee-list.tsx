// Import deps
import React from 'react'

// Import components
import { EmployeeListRow } from './employee-list-row';

// Import styles
//import './../styles/bookshelf-list.css'

// Create interfaces
interface EmployeeUI {
  id: number;
  name: string;
  sale: number;
}

interface EmployeeListUI {
  employees: EmployeeUI[];
  loading: boolean;
  handleEmployeeRemove: (id: number) => void;
}

// Create EmployeeList component
export const EmployeeList = (props: EmployeeListUI) => {
  // Show loading message
  if (props.loading) return <p>Leaderboard table is loading...</p>

  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" >id</th>

            <th className="table-head-item">Name</th>

            <th className="table-head-item" />
          </tr>
        </thead>

        <tbody className="table-body">
          {props.employees.length > 0 ? (
            props.employees.map((employee: EmployeeUI) => (
              <EmployeeListRow
                key={employee.id} //just because each thing needs a key
                employee={employee} //the component needs what is specified in the interface "EmployeesListRowUI"             
                handleEmployeeRemove={props.handleEmployeeRemove}
              />
              ))) : (
              <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no emplyees to show. Create one!</td>
              </tr>
          )
        }
        </tbody>
    </table>
  )
}