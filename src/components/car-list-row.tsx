import React from "react";

interface CarListRowUI {
    car: {
        id: number;
        brand: string;
        model: string;
        price: number;
    }
    handleDeleteCar:(id: number) => void;
}

export const CarListRow = (props: CarListRowUI) => {
    return (
    <tr className="table-row">
        <td className="table-item">
        {props.car.id}
        </td>

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
            <button className="btn btn-remove" onClick={() => props.handleDeleteCar(props.car.id)}>
            Remove Car
            </button>
        </td>

    </tr>
    )
}