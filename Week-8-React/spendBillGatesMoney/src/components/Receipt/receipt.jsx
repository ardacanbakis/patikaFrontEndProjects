import React from 'react';
import "./receipt.css";
import ListItem from "./ListItem.jsx";

const Receipt = ({ products, totalMoney }) => {

    //listedeki ürün yoksa receipt kısmını gizle
    if (Object.keys(products).length === 0) {
        return null;
    }

    return (
        <div className="receipt">
            <h2>Your Receipt</h2>
            <ul>
                <ListItem products={products}/>
            </ul>
            <p>Total: ${10000000 - totalMoney}</p>
        </div>
    );
};

export default Receipt;
