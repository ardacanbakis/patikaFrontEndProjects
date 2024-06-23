import React from 'react';
import "./header.css";

const Header = ({ totalMoney }) => {

    return (
        <div className={`totalmoney`}>
            <img src="https://neal.fun/spend/billgates.jpg" alt="Bill Gates"/>
            <h1>Spend Bill Gates' Money</h1>
            <span>${totalMoney}</span>
        </div>
    );
};

export default Header;
