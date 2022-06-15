import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
const data = require('../../data/data.json');
const {carshop: {employees, carmodels, sales}} = data;

const handleCreateCar = (id: number, brand: string, model: string, price: number) => {
    axios.post('http://localhost:4001/car/create', {
        id: id,
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

//Adds all cars to the database
const addLocalCars = () => {
    carmodels.forEach((car: {id: number; brand: string; model: string; price: number; }) => {
        handleCreateCar(car.id, car.brand, car.model, car.price)
    });
}

export function LoadCar(props: any) {
return (
    <div>
        <Button onClick={addLocalCars} variant="outline-info">Add cars from local file</Button>
    </div>
    )
}