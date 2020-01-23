import React from 'react';

const Product = ({ category, imageSrc }) => {
    console.log('imageSrc: ' + imageSrc);
    console.log('category: ' + category);

    return (
        <div className="product">
            <div className="product-image">
                <img src={imageSrc} alt={category} />
            </div>
            <button>Add to cart</button>
        </div>
    )
}

export default Product;