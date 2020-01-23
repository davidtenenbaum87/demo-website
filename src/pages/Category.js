import React from 'react';
import Product from '../components/Product';

const Category = ({ category, products }) => {
    const productDetails = products.map((product, index) => {
        return <Product key={index} className="product" imageSrc={product} category={category} />;
    })

    return (
        <div className="category">
            {productDetails}
        </div>
    )
}

export default Category;