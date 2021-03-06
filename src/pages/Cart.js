import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

class Cart extends Component {
    componentDidMount() {
        if (window.DY !== null) {
            window.DY.API('spa_start', {
                context: {
                type: 'CART',
                data: [this.props.cartItems.map(item => item.sku)][0] || [""],
                },
                countAsPageview: true
            });
        }
    }

    componentWillUnmount() {
        if (window.DY !== null) {
            window.DY.API('spa_end');
        }
    }

    renderCartItems = () => this.props.cartItems.map(item => {
        return <ProductCard key={item.sku} productData={item} handleAddToCart={null} handleRemoveFromCart={this.props.handleRemoveFromCart} className="product-item cart-page"/>
    });

    render() {
        return (
            <div className="cart">
                <div className="cart-items">
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