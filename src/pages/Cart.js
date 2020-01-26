import React from 'react';
import Product from '../components/Product';

const Cart = ({ cartItems, total, handleRemoveFromCart}) => {
    const renderCartItems = cartItems.map(item => {
        return <Product key={item.id} productData={item} handleAddToCart={null} handleRemoveFromCart={handleRemoveFromCart} className="cart-item"/>
    })
    return (
        <div className="cart">
            <div className="cart-list">
                {cartItems.length !== 0 ? renderCartItems : null}
            </div>
            <div className="cart-total">
                {
                    total > 0 ? 
                        <div className="cart-total">Estimated Total: {total.toFixed(2)}</div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default Cart;