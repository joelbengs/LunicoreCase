import React from "react";
import axios from "axios";
const data = require('../data/data.json');
const {carshop: {employees, carmodels, sales}} = data;

// Create new employee
const handleEmployeeCreate = (id: number, name: string, sale: number) => {
    axios.post('http://localhost:4001/employee/create', {
        id: id,  
        name: name,
        sale: sale,
    })
    .then(res => {
        console.log('Successfull add of Employee!')
        console.log(res.data.message)
    })
    .catch(error => console.error(`There was an error creating the ${name} employee: ${error}`))
}

//Adds all employees to the database, whit sale = 0
const addLocalEmployee = () => {
    employees.forEach((employee: { id: number; name: string; }) => {
        handleEmployeeCreate(employee.id, employee.name, 0) //Should be the accumulated sale, a feauture wich is not implemented.
    })
}

export function LoadEmployee(props: any) {
    return (
        <div>
            <button onClick={addLocalEmployee} className="btn btn-add">Press here to add employees from local file</button>
        </div>
        )
}