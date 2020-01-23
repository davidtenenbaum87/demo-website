import React from 'react';
import { NavLink } from 'react-router-dom';


const Product = ({ category, productDetails }) => {
    return (
        <div className="product">
            <div className="product-image">
                <NavLink to={{ pathname:`/productDetails/${productDetails.id}`, productDetails: productDetails}} ><img src={productDetails.src} alt={category} /></NavLink>
            </div>
            <div className="product-price">
                <p>{productDetails.price}</p>
            </div>
        </div>
    )
}

export default Product;