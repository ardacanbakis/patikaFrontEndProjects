import React from 'react';
import "./product.css";
import data from "./data.js";

const Products = ({ handleBuy, handleSell, quantities }) => {

    return (
        <div>
            <div className="cards">
                {data.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt={product.name}/>
                        <h2>{product.name}</h2>
                        <p>
                            <strong>${product.price}</strong>
                        </p>
                        <button className="sellButton" onClick={() => handleSell(product.id, product.price)}>Sell</button>
                        <input className="quantity" type="number" value={quantities[product.id] || 0} disabled/>
                        <button className="buyButton" onClick={() => handleBuy(product.id, product.price)}>Buy</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
