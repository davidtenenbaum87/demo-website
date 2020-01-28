import React, { Component } from 'react';
import Product from '../components/Product';

// const Cart = ({ cartItems, total, handleRemoveFromCart}) => {
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderCartItems = () => this.props.cartItems.map(item => {
        return <Product key={item.id} productData={item} handleAddToCart={null} handleRemoveFromCart={this.props.handleRemoveFromCart} className="cart-item"/>
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