import React from 'react';
import Product from '../components/Product';

const Cart = ({ cartItems, total }) => {
    const renderCartItems = cartItems.map(item => {
        return <Product key={item.id} productData={item} handleAddToCart={null} className="cart-item"/>
    })
    return (
        <div className="cart">
            <div className="cart-list">
                {cartItems.length !== 0 ? renderCartItems : null}
            </div>
            <div className="cart-total">
                {
                    total !== null ? 
                        <div className="cart-total">Estimated Total: {total.toFixed(2)}</div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default Cart;