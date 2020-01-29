import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.productData = this.props.location.productData;
    }

    componentDidMount() {
        if (window.DY !== null)
            window.DY.recommendationContext = { type: "PRODUCT" };
    }

    
    render() {
        return (
            <div className="product-details">
                <div className="product-image" id={this.productData.sku}>
                    <img src={this.productData.image_url} alt={this.productData.category} id={this.productData.sku} />
                </div>
                <div className="product-price">
                    <p>${this.productData.price}</p>
                </div>
                {this.props.location.className === "product-item" ? 
                    <button className="product-btn-add-cart" onClick={(e) => this.props.location.handleAddToCart(e, this.productData.sku)} >ADD TO CART</button>
                :
                    <i className="fas fa-times product-btn-remove-cart" onClick={(e) => this.props.location.handleRemoveFromCart(e, this.productData.sku)}></i>
                }
            </div>
        )
    }
}

export default Product;