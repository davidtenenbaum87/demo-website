import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ products, handleAddToCart, renderProductPage }) => {
    return (
        <div className="home">
            <ProductList category="men" products={products} handleAddToCart={handleAddToCart} renderProductPage={renderProductPage} />
            <ProductList category="women" products={products} handleAddToCart={handleAddToCart} renderProductPage={renderProductPage} />
            <ProductList category="kids" products={products} handleAddToCart={handleAddToCart} renderProductPage={renderProductPage} />
        </div>
    )
}

export default Home;