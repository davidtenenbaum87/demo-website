import React from 'react';

const productDetails = (props) => {
    console.log(props.location.productDetails);
    return (
        <div className="productDetails">
            <div className="product-image">
                <img src={props.location.productDetails.src} alt={props.location.productDetails.id} />
            </div>
            <div className="product-price">
                <p>{props.location.productDetails.price}</p>
            </div>
            <button>ADD TO CART</button>
        </div>
    )
}

export default productDetails;