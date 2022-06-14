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
  sales: number;
}

interface EmployeeListUI {
  employees: EmployeeUI[];
  loading: boolean;
  handleEmployeeRemove: (id: number, name: string) => void;
}

// Create EmployeeList component
export const EmployeeList = (props: EmployeeListUI) => {
  // Show loading message
  if (props.loading) return <p>Leaderboard table is loading...</p>

  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" >#</th>

            <th className="table-head-item">Name</th>

            <th className="table-head-item">Sales</th>

            <th className="table-head-item" />
          </tr>
        </thead>

        <tbody className="table-body">
          {props.employees.length > 0 ? (
            props.employees.map((employee: EmployeeUI, idx) => (
              <EmployeeListRow
                key={employee.id} //just because each thing needs a key
                position={idx + 1}
                employee={employee} //the component needs what is specified in the interface "EmployeesListRowUI"             
                handleEmployeeRemove={props.handleEmployeeRemove}
              />
              )
            )
          ) : (
            <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no emplyees to show. Create one!</td>
            </tr>
          )
        }
        </tbody>
    </table>
  )
}