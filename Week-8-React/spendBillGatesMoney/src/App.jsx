import {useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Products from "./components/Products/products.jsx";
import Receipt from "./components/Receipt/receipt.jsx";
import products from "./components/Products/products.jsx";

const App = () => {
    const [totalMoney, setTotalMoney] = useState(100000000);
    const [quantities, setQuantities] = useState({});

    const handleBuy = (productId, price) => {
        if (totalMoney < price) return;     // Toplam para fiyattan küçükse buy işlemi yapma
        setTotalMoney(totalMoney - price);
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };

    const handleSell = (productId, price) => {
        if (quantities[productId] > 0) {        // Ürün sayısı 0'dan büyükse sell işlemi yapma
            setTotalMoney(totalMoney + price);
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] - 1
            }));
        }
    };
    
    return (
        <div>
            <Header totalMoney={totalMoney} />
            <Products handleBuy={handleBuy} handleSell={handleSell} quantities={quantities}/>
            <Receipt products={quantities} totalMoney={totalMoney}/>
        </div>
    );
};

export default App;