import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({ productData, handleAddToCart, handleRemoveFromCart, className }) => {
    return (
        <div className={className}>
            <Link to={{pathname:`/demo-website/category/${productData.category}/product/${productData.id}`, productData, handleAddToCart, handleRemoveFromCart, className}}>
                <div className="product-image" id={productData.id}>
                    <img src={productData.src} alt={productData.category} id={productData.id} />
                </div>
            </Link>
            <div className="product-price">
                <p>${productData.price}</p>
            </div>
            {className === "product-item" ? 
                null
            :
                <i className="fas fa-times product-btn-remove-cart" onClick={(e) => handleRemoveFromCart(e, productData.id)}></i>
            }
        </div>
    )
}

export default Product;