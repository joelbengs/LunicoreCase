import React from 'react'

interface EmployeeListRowUI {
    position: number,
    employee: {
        id: number,
        name: string,
        sales: number
    }
    handleEmployeeRemove: (id: number, name: string) => void;
}

// Create BookshelfListRow component
export const EmployeeListRow = (props: EmployeeListRowUI) => (
    <tr className="table-row">
      <td className="table-item">
        {props.position}
      </td>
  
      <td className="table-item">
        {props.employee.id}
      </td>
  
      <td className="table-item">
        {props.employee.name}
      </td>
  
      <td className="table-item">
        {props.employee.sales}
      </td>
  
      <td className="table-item">
        <button
          className="btn btn-remove"
          onClick={() => props.handleEmployeeRemove(props.employee.id, props.employee.name)}>
          Remove employee
        </button>
      </td>
    </tr>
)