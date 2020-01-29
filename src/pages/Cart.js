import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        if (window.DY !== null)
            window.DY.recommendationContext = { type: "CART" };
    }


    renderCartItems = () => this.props.cartItems.map(item => {
        return <ProductCard key={item.sku} productData={item} handleAddToCart={null} handleRemoveFromCart={this.props.handleRemoveFromCart} className="cart-item"/>
    });

    render() {
        return (
            <div className="cart">
                <div className="cart-list">
                    {this.props.cartItems.length !== 0 ? this.renderCartItems() : null}
                </div>
                <div className="cart-total">
                    {
                        this.props.total > 0 ? 
                            <div className="cart-total">Estimated Total: {this.props.total.toFixed(2)}</div>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default Cart;