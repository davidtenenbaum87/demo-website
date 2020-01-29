import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({ productData, handleAddToCart, handleRemoveFromCart, className }) => {
    return (
        <div className={className}>
            <Link to={{pathname:`/demo-website/category/${productData.category}/product/${productData.sku}`, productData, handleAddToCart, handleRemoveFromCart, className}}>
                <div className="product-image" id={productData.id}>
                    <img src={productData.image_url} alt={productData.name} id={productData.sku} />
                </div>
            </Link>
            <div className="product-price">
                <p>${productData.price}</p>
            </div>
            {className === "product-item" ? 
                null
            :
                <i className="fas fa-times product-btn-remove-cart" onClick={(e) => handleRemoveFromCart(e, productData.sku)}></i>
            }
        </div>
    )
}

export default Product;