import React from "react";

interface CarListRowUI {
    car: {
        brand: string;
        model: string;
        price: number;
    }
}

export const CarListRow = (props: CarListRowUI) => {

    function HelloWorld() {
        console.log('Hello World, you just pushed a button')
    }

    return (
    <tr className="table-row">

        <td className="table-item">
        {props.car.brand}
        </td>

        <td className="table-item">
        {props.car.model}
        </td>

        <td className="table-item">
        {props.car.price}
        </td>

        <td className="table-item">
            <button className="btn btn-remove" onClick={HelloWorld}>
            Remove Car
            </button>
        </td>

    </tr>
    )
}