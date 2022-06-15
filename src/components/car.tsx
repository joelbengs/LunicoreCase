import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { CarList } from './car-list';

export function Car(props: any) {
    //STATES with hooks
    //useState is a function that takes initial state as parameter
    //and returns an array of two thins:
    //The current state and a function for updating it.
    //To update state, simply call the update function with the new value as parameter.
    const [carTable, setCarTable] = useState([]);   //state with all cars
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');

    //useEffect is a hook that run a function every time state changes
    //This is innefficient but MVP
    useEffect(() => { getCarTable() });

    //Sends GET request to server and updates state
    const getCarTable = async () => {
        axios.get('http://localhost:4001/car/all')
        .then(response => {
            setCarTable(response.data)
        })
        .catch(error => console.error('Error in getCarTable in car.tsx, Get request failed: ${error}'))
    }

    //Sends POST request to server
    const handleCreateCar = () => {
        axios.post('http://localhost:4001/car/create', {
            brand: brand,
            model: model,
            price: parseInt(price)
        })
        .then(res => {
            console.log('Successfull add!')
            console.log(res.data)
        })
        .catch(error => console.error('There was an error creating the ${name} car (from car.tsx): ${error}'))
    }

    const handleDeleteCar = (id: number) => {
        axios.put('http://localhost:4001/car/delete', { id:id })
        .then(() => {
            console.log('Car with id ${id} deleted')
            getCarTable();
        })
        .catch(error => console.error(`There was an error removing the car with id ${id}: ${error}`))
    }

    //Handle the submit from the form
    const handleSubmit = () => {
        if (brand.length > 0 && model.length > 0 && price.length > 0) {
            handleCreateCar();
        } else {
            console.info('Form was not valid - try again')
        }
        handleInputReset();
    }

    //Resets the form upon submit
    const handleInputReset = () => {
        setBrand('');
        setModel('');
        setPrice('');
    }
    
    //HTML
    return (
        <div className="car-wrapper">            
            {/*List of existing cars*/}
            <CarList cars={carTable} handleDeleteCar={handleDeleteCar} />
            
            {/*form for creating new car*/}
            <div className="car-form">
                <div className="form-wrapper" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <fieldset>
                            <label className="form-label" >Enter brand :</label>
                            <input className="form-input" type="text" id="brand" name="brand" value={brand} onChange={(e) => setBrand(e.currentTarget.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" >Enter model :</label>
                            <input className="form-input" type="text" id="model" name="model" value={model} onChange={(e) => setModel(e.currentTarget.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" >Enter price :</label>
                            <input className="form-input" type="string" id="price" name="price" value={price} onChange={(e) => setPrice(e.currentTarget.value)} />
                        </fieldset>
                    </div>
                </div>
                <button onClick={handleSubmit} className="btn btn-add">Add the car</button>
            </div>
        </div>
    );
} 


