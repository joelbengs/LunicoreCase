import { json } from "body-parser";
import React from "react";
import axios from "axios";
const data = require('../data/data.json');
const {carshop: {employees, carmodels, sales}} = data;

const handleCreateCar = (brand: string, model: string, price: number) => {
    axios.post('http://localhost:4001/car/create', {
        brand: brand,
        model: model,
        price: price
    })
    .then(res => {
        console.log('Successfull add of Car!')
        console.log(res.data.message)
    })
    .catch(error => console.error(`There was an error creating the ${brand} car: ${error}`))
}

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

//Adds all cars to the database
const addLocalCars = () => {
    carmodels.forEach((car: {id: number; brand: string; model: string; price: number; }) => {
        handleCreateCar(car.brand, car.model, car.price)
    });
}

//Adds all employees to the database, whit sale = 0
const addLocalEmployee = () => {
    employees.forEach((employee: { id: number; name: string; }) => {
        handleEmployeeCreate(employee.id, employee.name, 0) //Should be the accumulated sale, a feauture wich is not implemented.
    })
}

export function LoadData(props: any) {
return (
    <div>
        <h2>This is your data loading component</h2>
        <div>
            <button onClick={addLocalEmployee} className="btn btn-add">Press here to add employees from local file</button>
        </div>
        <div>
            <button onClick={addLocalCars} className="btn btn-add">Press here to add cars from local file</button>
        </div>
    </div>
    
    )
}