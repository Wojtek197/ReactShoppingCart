import { render } from '@testing-library/react';
import react from 'react';

export default function CartCheckout(props) {
    const {cartItems} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.cost * c.quantity, 0);
    const shippingPrice = itemsPrice >= 100 ? 0 : 23.80;
    const totalPrice = itemsPrice + shippingPrice;
    return (
    <aside>
        <h2>Cart Items</h2>
        <div className="emptyCart">
            {cartItems.length === 0 && <div>Cart is Empty</div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className="row">
                <div className="col-1">{item.name}</div>
                <div className="col-2-right">{item.quantity} x ${item.cost.toFixed(2)}</div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className="row">
                <div className="col-1">Subtotal</div>
                <div className="col-2-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-1">Shipping</div>
                <div className="col-2-right">${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-1"><strong>Grand Total</strong></div>
                <div className="col-2-right"><strong>${totalPrice.toFixed(2)}</strong></div>
            </div>
            <div className="row">
                <button className="btn-checkout" onClick={() => alert("Your order has been submitted successfully" )}>Proceed to Checkout</button>
            </div>
            </>
        )}
    </aside>
    );
}