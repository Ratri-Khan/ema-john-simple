import React from 'react';
import Cart from '../Cart/Cart';

const Order = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <h2>Order page</h2>
            </div>
            <div className='md:w-3/12 h-96 bg-lime-500 text-white font-bold'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Order;