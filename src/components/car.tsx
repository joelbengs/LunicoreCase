import React, {useEffect, useState } from 'react'
import axios from 'axios'

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
    useEffect(() => {getCarTable()});

    //Sends GET request to server and updates state
    const getCarTable = async () => {
        axios.get('http://localhost:4001/car/all')
        .then(response => {
            setCarTable(response.data)
        })
        .catch(error => console.error('Error in getCarTable in car.tsx, Get request failed: ${error}'))
    }

    //Sends POST request to server
    const postCar = () => {
        axios.post('http://localhost:4001/car/create', {
            brand: "Volvo",
            model: "S90",
            price: 250000
        })
        .then(res => {
            console.log('Successfull add!')
            console.log(res.data)
        })
        .catch(error => console.error('There was an error creating the Volvo car (from car.tsx): ${error}'))
    }
    
    return (
        <div className="car-wrapper">
            <h1>This is a car paragraph</h1>
            <button onClick={postCar} className="btn btn-add">Add a Volvo!</button>
        
        <table className="table">
            <thead>
                <th className="table-head-item">#</th>
                <th className="table-head-item">Brand</th>
                <th className="table-head-item">Model</th>
                <th className="table-head-item">Price</th>
                <th className="table-head-item">Alternative</th>
            </thead>
            <tbody className='table-body'>
                {carTable.length > 0 ? (
                    <h1>carTable has a length!</h1>
                    //<td>{carTable[0].brand}</td>
                ):(
                <tr className="table-row">
                    <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no cars to show. Create one!</td>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    );
} 


{/*form for creating new car*/}
            {/* <div className="form-wrapper" onSubmit={handleCarSubmit}>
                <div className="form-row">
                    <fieldset>
                        <label className="form-label" htmlFor="brand">Enter brand: </label>
                        <input className="form-input" type="text" id="brand" name="brand" value={brand} onChange={(e) => setBrand(e.currentTarget.value)} />
                    </fieldset>

                </div>
            </div> */}