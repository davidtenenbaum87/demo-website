import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ products, handleAddToCart }) => {
    return (
        <div className="home">
            <ProductList category="men" products={products} handleAddToCart={handleAddToCart}/>
            <ProductList category="women" products={products} handleAddToCart={handleAddToCart}/>
            <ProductList category="kids" products={products} handleAddToCart={handleAddToCart}/>
        </div>
    )
}

export default Home;