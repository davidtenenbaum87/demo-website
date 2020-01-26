import React from 'react';

const Product = ({ productData, handleAddToCart, handleRemoveFromCart, className }) => {
    return (
        <div className={className}>
            <div className="product-image" id={productData.id} >
                <img src={productData.src} alt={productData.category} id={productData.id} />
            </div>
            <div className="product-price">
                <p>${productData.price}</p>
            </div>
            {className === "product-item" ? 
                <button className="product-btn-add-cart" onClick={(e) => handleAddToCart(e, productData.id)} >ADD TO CART</button>
            :
                <i className="fas fa-times product-btn-remove-cart" onClick={(e) => handleRemoveFromCart(e, productData.id)}></i>
            }
        </div>
    )
}

export default Product;