import React from 'react';

const Product = ({ category, productDetails }) => {
    return (
        <div className="product">
            <div className="product-image">
                <img src={productDetails.src} alt={category} />
            </div>
            <p>{productDetails.price}</p>
        </div>
    )
}

export default Product;