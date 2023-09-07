import React from 'react';

const Cart = ({cart}) => {
    // console.log(props.cart);
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        let prePrice = product.price;
        total = total + prePrice;

        let preShipping = product.shipping;
        totalShipping = totalShipping + preShipping;
    }   
    const grandTotal = total + totalShipping;
    return (
        <div>
            <p>Selected Item : {cart.length}</p>
            <p>Price : {total}</p>
            <p>Shipping Charge : {totalShipping}</p>
            <p>Grand Total : {grandTotal} </p>
        </div>
    );
};

export default Cart;