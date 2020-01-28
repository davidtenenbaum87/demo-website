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
                <div className="product-image" id={this.productData.id}>
                    <img src={this.productData.src} alt={this.productData.category} id={this.productData.id} />
                </div>
                <div className="product-price">
                    <p>${this.productData.price}</p>
                </div>
                {this.props.location.className === "product-item" ? 
                    <button className="product-btn-add-cart" onClick={(e) => this.props.location.handleAddToCart(e, this.productData.id)} >ADD TO CART</button>
                :
                    <i className="fas fa-times product-btn-remove-cart" onClick={(e) => this.props.location.handleRemoveFromCart(e, this.productData.id)}></i>
                }
            </div>
        )
    }
}

export default Product;