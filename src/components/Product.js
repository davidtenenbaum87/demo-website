import React from 'react';

const Product = ({ productData, handleAddToCart }) => {
    return (
        <div className="product">
            <div className="product-image" id={productData.id} >
                <img src={productData.src} alt={productData.category} id={productData.id} />
            </div>
            <div className="product-price">
                <p>{productData.price}</p>
            </div>
            <button className="product-btn-cart" onClick={handleAddToCart} >ADD TO CART</button>
        </div>
    )
}

export default Product;