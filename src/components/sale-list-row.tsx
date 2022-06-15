import React from 'react'

interface SaleListRowUI {
    employee: {
        id: number,
        name: string,
        sale: number
    }
}

// Create BookshelfListRow component
export const SaleListRow = (props: SaleListRowUI) => (
    <tr className="table-row">
  
      <td className="table-item">
        {props.employee.id}
      </td>
  
      <td className="table-item">
        {props.employee.name}
      </td>
  
      <td className="table-item">
        {props.employee.sale}
      </td>
    </tr>
)