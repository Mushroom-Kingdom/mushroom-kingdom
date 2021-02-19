import React from "react"
import ProductCard from "../components/ProductCard/ProductCard";
import './css/shop.css';

function Shop() {
    return (
        <div className="shop">       
            <div className="container">
                <ProductCard>
                </ProductCard>
            </div>
        </div>                
    )
}

export default Shop;