// Import deps
import React from 'react'

// Import components
import { SaleListRow } from './sale-list-row';

// Create interfaces
interface SaleUI {
  id: number;
  name: string;
  sale: number;
}

interface SaleListUI {
  employees: SaleUI[];
  loading: boolean;
}

// Create EmployeeList component
export const SaleList = (props: SaleListUI) => {
  // Show loading message
  if (props.loading) return <p>Leaderboard table is loading...</p>

  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" >id</th>

            <th className="table-head-item">Name</th>

            <th className="table-head-item">Sales</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {props.employees.length > 0 ? (
            props.employees.map((employee: SaleUI) => (
              <SaleListRow
                key={employee.id} //just because each thing needs a key
                employee={employee} //the component needs what is specified in the interface "EmployeesListRowUI"             
              />
              ))) : (
              <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={3}>There are no employees to show. Create one!</td>
              </tr>
          )
        }
        </tbody>
    </table>
  )
}