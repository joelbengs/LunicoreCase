import React from "react";
import { CarListRow } from './car-list-row';

interface CarUI {
    brand: string;
    model: string;
    price: number;
}

interface CarListUI {
    cars: CarUI[];
}

export const CarList = (props: CarListUI) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-head-item">Brand</th>
                    <th className="table-head-item">Model</th>
                    <th className="table-head-item">Price</th>
                    <th className="table-head-item">Alternative</th>
                </tr>
            </thead>

            <tbody className="table-body">
                {props.cars.length > 0 ? (props.cars.map((car: CarUI) => (
                    <CarListRow car={car} />
                    ))) : (
                    <tr className="table-row">
                    <td className="table-item" style={{ textAlign: 'center' }} colSpan={5}>There are no cars to show. Create one!</td>
                    </tr>
                    )
                }
            </tbody>
    </table>
    )



}