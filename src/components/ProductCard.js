import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ productData, handleAddToCart, handleRemoveFromCart, className }) => { 
    return (
        <div className={className}>
            <Link to={{pathname:`/category/${productData.category}/product/${productData.sku}`, productData, handleAddToCart, handleRemoveFromCart, className:"product-item product-page"}}>
                <div className="product-image" id={productData.id}>
                    <img src={productData.image_url} alt={productData.name} id={productData.sku} />
                </div>
            </Link>

            <div className="product-data">
                <div className="product-name">
                    <p>{productData.name}</p>
                </div>
                <div className="product-price">
                    <p>${productData.price}</p>
                </div>
            </div>
            {className === "product-item category-page" ?
                null
            :
                className === "product-item product-page" ?
                    <button className="product-btn-add-cart" onClick={(e) => handleAddToCart(e, productData.sku)} >ADD TO CART</button>
                :
                    className === "product-item cart-page" ?
                        <i className="fas fa-times product-btn-remove-cart" onClick={(e) => handleRemoveFromCart(e, productData.sku)}></i>
                    :
                        null
            }     
        </div>
    )
}

export default ProductCard;