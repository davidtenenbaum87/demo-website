import React from 'react';
import Product from './Product';

const ProductList = ({ category, products, handleAddToCart }) => {
    const renderProducts = products.filter(p => p.category === category).map((product) => {
        return <Product key={product.id} productData={product} handleAddToCart={handleAddToCart} className="product-item"/>;
    })

    return (
        <div className={`category ${category}`}>
            {renderProducts}
        </div>
    )
}

export default ProductList;