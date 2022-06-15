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

//Adds all cars to the database
const addLocalCars = () => {
    carmodels.forEach((car: {id: number; brand: string; model: string; price: number; }) => {
        handleCreateCar(car.brand, car.model, car.price)
    });
}

export function LoadCar(props: any) {
return (
    <div>
        <button onClick={addLocalCars} className="btn btn-add">Press here to add cars from local file</button>
    </div>
    
    )
}