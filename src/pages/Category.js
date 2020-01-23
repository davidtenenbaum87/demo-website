import React from 'react';
import Product from '../components/Product';

const Category = ({ category, products }) => {
    const renderProducts = products.map((productDetails, index) => {
        return <Product key={index} className="product" productDetails={productDetails} category={category} />;
    })

    return (
        <div className={`category ${category}`}>
            {renderProducts}
        </div>
    )
}

export default Category;