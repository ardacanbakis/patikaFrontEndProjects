import React from 'react';
import data from "../Products/data.js";

function ListItem({ products }) {
    return (
        <div className="receipt-items">

            {Object.keys(products).map((productId) => (
                <li key={productId}>
                    <span>{data[productId].name} x </span>
                    <span>{products[productId]} - </span>
                    <span>${data[productId].price * products[productId]}</span>
                </li>
            ))}
            <hr/>
        </div>
    );
}

export default ListItem;
