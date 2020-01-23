import React from 'react';
// import ProductDetails from '../pages/ProductDetails'
import { NavLink } from 'react-router-dom';


const Product = ({ category, productDetails }) => {
    // const renderProductDetails = productDetails.map((details, index) => {
    //     return <ProductDetails key={index} className="productDeatils" details={details} category={category} />;
    // })

    return (
        <div className="product">
            <div className="product-image">
            <NavLink to="/productDetails"><img src={productDetails.src} alt={category} /></NavLink>
            </div>
            <div className="product-price">
                <p>{productDetails.price}</p>
            </div>
        </div>
    )
}

export default Product;