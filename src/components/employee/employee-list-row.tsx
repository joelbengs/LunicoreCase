import React from 'react'

interface EmployeeListRowUI {
    employee: {
        id: number,
        name: string,
        sale: number
    }
    handleEmployeeRemove: (id: number) => void;
}

// Create BookshelfListRow component
export const EmployeeListRow = (props: EmployeeListRowUI) => (
    <tr className="table-row">
  
      <td className="table-item">
        {props.employee.id}
      </td>
  
      <td className="table-item">
        {props.employee.name}
      </td>
  
      <td className="table-item">
        <button
          className="btn btn-remove"
          onClick={() => props.handleEmployeeRemove(props.employee.id)}>
          Remove employee
        </button>
      </td>
    </tr>
)