import React from 'react';

const ProductDetails = (props) => {
    const productData = props.location.productData;

    return (
        <div className="product-details">
            <div className="product-image" id={productData.id}>
                <img src={productData.src} alt={productData.category} id={productData.id} />
            </div>
            <div className="product-price">
                <p>${productData.price}</p>
            </div>
            {props.location.className === "product-item" ? 
                <button className="product-btn-add-cart" onClick={(e) => props.location.handleAddToCart(e, productData.id)} >ADD TO CART</button>
            :
                <i className="fas fa-times product-btn-remove-cart" onClick={(e) => props.location.handleRemoveFromCart(e, productData.id)}></i>
            }
        </div>
    )
}

export default ProductDetails;